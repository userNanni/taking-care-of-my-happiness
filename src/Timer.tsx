// src/Timer.tsx
import React, { useState, useEffect } from "react";
import "./Timer.css";

// Define the shape of the time difference
interface TimeDiff {
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// Props interface for the Timer component
interface TimerProps {
  startDate: Date;
}

const Timer: React.FC<TimerProps> = ({ startDate }) => {
  const [timeDiff, setTimeDiff] = useState<TimeDiff>(getTimeDiff(startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDiff(getTimeDiff(startDate));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [startDate]);

  return (
    <div className="clock">
      <div className="time-unit">
        <div className="label">Years</div>
        <div className="roller">{renderRoller(timeDiff.years)}</div>
      </div>
      <div className="time-unit">
        <div className="label">Days</div>
        <div className="roller">{renderRoller(timeDiff.days)}</div>
      </div>
      <div className="time-unit">
        <div className="label">Hours</div>
        <div className="roller">{renderRoller(timeDiff.hours)}</div>
      </div>
      <div className="time-unit">
        <div className="label">Minutes</div>
        <div className="roller">{renderRoller(timeDiff.minutes)}</div>
      </div>
      <div className="time-unit">
        <div className="label">Seconds</div>
        <div className="roller">{renderRoller(timeDiff.seconds)}</div>
      </div>
    </div>
  );
};

// Helper function to render the rolling effect for each number
function renderRoller(num: string): JSX.Element {
  const digits = num.split(""); // Split the string into digits
  return (
    <div className="roller-wrapper">
      {digits.map((digit, index) => (
        <div key={index} className="roller-digit">
          {digit}
        </div>
      ))}
    </div>
  );
}

// Calculate the time difference between now and the start date, returning a string with 2 digits for each unit
function getTimeDiff(startDate: Date): TimeDiff {
  const now: Date = new Date();
  const diff: number = now.getTime() - startDate.getTime();

  const seconds: string = Math.floor((diff / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes: string = Math.floor((diff / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const hours: string = Math.floor((diff / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const days: string = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365)
    .toString()
    .padStart(2, "0"); // Approximate days
  const years: string = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    .toString()
    .padStart(2, "0"); // Approximate years

  return { years, days, hours, minutes, seconds };
}

export default Timer;
