import React, { useState, useEffect } from "react";

const FizzBuzz = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    let results = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) {
        results.push("FizzBuzz");
      } else if (i % 3 === 0) {
        results.push("Fizz");
      } else if (i % 5 === 0) {
        results.push("Buzz");
      } else {
        results.push(i);
      }
    }
    setOutput(results);
  }, []); // useEffectは一度だけ実行される

  return (
    <div>
      <h1>FizzBuzz Results</h1>
      <ul>
        {output.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzz;
