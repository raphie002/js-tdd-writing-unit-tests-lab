// Your code here
export function isPalindrome(word) {
  // 1. Check if the input is a string
  if (typeof word !== 'string') {
    throw new Error("Input must be a string.");
  }

  // 2. Handle empty string as a non-palindrome based on your test
  if (word === "") {
    return false;
  }

  // 3. Check for non-alphabetic characters (allowing only A-Z, a-z)
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters.");
  }

  // 4. Normalize the word to lowercase for case-insensitive comparison
  const normalizedWord = word.toLowerCase();

  // 5. Reverse the normalized word
  const reversedWord = normalizedWord.split('').reverse().join('');

  // 6. Compare the normalized word with its reversed version
  return normalizedWord === reversedWord;
}