import React, { useState } from "react";

const Palindrome = () => {
  const [result, setResult] = useState("");

  function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    return reversed === word;
  }

  function checkPalindrome() {
    const word = prompt("Enter a word:");
    const isWordPalindrome = isPalindrome(word);
    setResult(
      isWordPalindrome
        ? `${word} is a palindrome`
        : `${word} is not a palindrome`
    );
  }

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <button onClick={checkPalindrome}>Check Palindrome</button>
      <p>{result}</p>
    </div>
  );
};

export default Palindrome;
