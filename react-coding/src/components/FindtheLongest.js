import React, { useState } from "react";

const FindTheLongest = () => {
  const [sentence, setSentence] = useState("");
  const [longest, setLongest] = useState(0);

  function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = 0;

    for (let word of words) {
      if (word.length > longest) {
        longest = word.length;
      }
    }
    return longest;
  }

  const handleChange = (event) => {
    setSentence(event.target.value);
  };

  const handleCheck = () => {
    const result = findLongestWord(sentence);
    setLongest(result);
  };

  return (
    <div>
      <h1>Find the Longest Word</h1>
      <input
        type="text"
        value={sentence}
        onChange={handleChange}
        placeholder="Enter a sentence"
      />
      <button onClick={handleCheck}>Check</button>
      <p>Longest word length: {longest}</p>
    </div>
  );
};

export default FindTheLongest;
