import React, { useState } from "react";

const MinutesIntoSeconds = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(null);

  const handleConvert = () => {
    setSeconds(minutes * 60);
  };

  return (
    <div>
      <h1>2️⃣ MinutesIntoSeconds</h1>
      <input
        type="number"
        placeholder="Enter number of minutes"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
      />
      <button onClick={handleConvert}>Convert to Seconds</button>
      {seconds !== null && (
        <div>
          {minutes}minutes is {seconds}seconds.
        </div>
      )}
    </div>
  );
};

export default MinutesIntoSeconds;
