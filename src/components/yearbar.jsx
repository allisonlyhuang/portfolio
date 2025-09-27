import { useState, useEffect } from "react";
import '../css/yearbar.css';

function YearProgressBar() {
  const [dayOfYear, setDayOfYear] = useState(0);
  const [totalDays, setTotalDays] = useState(365);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    // check if leap year
    const isLeap =
      (now.getFullYear() % 4 === 0 &&
        now.getFullYear() % 100 !== 0) ||
      now.getFullYear() % 400 === 0;

    setDayOfYear(day);
    setTotalDays(isLeap ? 366 : 365);
  }, []);

  return (
    <div className="year-progress-container">
      <div
        className="year-progress-bar"
        style={{ width: `${(dayOfYear / totalDays) * 100}%` }}
      ></div>
      <span className="year-progress-text">
        EXP. {dayOfYear}/{totalDays}
      </span>
    </div>
  );
}

export default YearProgressBar;
