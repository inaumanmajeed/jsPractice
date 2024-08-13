// Get references to the DOM elements
const submitBtn = document.getElementById("Check__word");
const input = document.getElementById("word");
const showResult = document.getElementById("result");
const showMoreWords = document.getElementById("possible__words");

// Function to check if a word is a palindrome
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// Function to find all palindromic substrings in a word
function findPalindromicSubstrings(word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 2; j <= word.length; j++) {
      const substring = word.substring(i, j);
      if (isPalindrome(substring) && substring.length >= 3) {
        result.push(substring);
      }
    }
  }
  return result;
}

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
  event.preventDefault(); // Prevent the default form submission behavior
  const inputWord = input.value.trim().toLowerCase(); // Get the input word and trim any whitespace if user enters any extra spaces
  console.log("🚀 ~ submitBtn.addEventListener ~ inputWord:", inputWord);

  const isInputPalindrome = isPalindrome(inputWord); // Check if the input word is a palindrome

  // checks and displays the results
  if (isInputPalindrome) {
    showResult.innerHTML = `Yes, ${inputWord} is a Palindrome Word`;
    const palindromicSubstrings = findPalindromicSubstrings(inputWord); // Find palindromic substrings
    if (
      palindromicSubstrings.length > 0 &&
      palindromicSubstrings !== null &&
      palindromicSubstrings !== undefined &&
      palindromicSubstrings !== ""
    ) {
      showMoreWords.innerHTML = `Sub-Palindromes: ${palindromicSubstrings.join(
        ", "
      )}`;
    } else {
      showMoreWords.innerHTML = `Word is Palindrome but no sub-palindrome found`;
    }
  } else {
    showResult.innerHTML = `No, ${inputWord} is not a Palindrome Word`;
    showMoreWords.innerHTML = "";
  }
});
