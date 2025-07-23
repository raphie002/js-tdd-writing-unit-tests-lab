// Your tests here

import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("should return true for a known palindrome", () => {
    const word = "racecar";
    const result = isPalindrome(word); // This function doesn't exist yet!
    expect(result).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    const word = "car";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  });

  it("should return true for words that are a combination of uppercase and lowercase letters", () => {
    const word = "Racecar";
    const result = isPalindrome(word);
    expect(result).toBe(true);
  });

  it("should return false for an empty string", () => {
    const word = "";
    const result = isPalindrome(word);
    expect(result).toBe(false);
  });

  it("should throw an error if input has any non-alphabetic characters", () => {
    const word = "racec@r";
    // Using a function wrapper for .toThrow()
    expect(() => isPalindrome(word)).toThrow("Input must contain only alphabetic characters.");
  });

  it("should throw an error if input is not a string", () => {
    const nonString = 123;
    expect(() => isPalindrome(nonString)).toThrow("Input must be a string.");
  });
});
