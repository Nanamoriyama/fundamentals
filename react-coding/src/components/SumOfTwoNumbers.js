import React, { useState } from "react";

const SumOfTwoNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <h1>1️⃣ Sum of Two Numbers</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={handleSum}>Calculate Sum</button>
      {sum !== null && <div>The sum is: {sum}</div>}
    </div>
  );
};

export default SumOfTwoNumbers;
