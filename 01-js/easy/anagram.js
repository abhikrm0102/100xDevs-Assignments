/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
// Here, the below code is all that was provided in the original code snippet as question prompt

function isAnagram(str1, str2) {

}

module.exports = isAnagram;
*/

function isAnagram(str1, str2) {
  // Normalize the strings by removing spaces and converting to lowercase
  const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // If lengths differ, they cannot be anagrams
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }
/*
// Create frequency maps for both strings
  const charCount = {};

  for (const char of normalizedStr1) { // Iterate through each character in the first string
    // Increment the count for each character in the first string
    charCount[char] = (charCount[char] || 0) + 1; // Initialize or increment the character count
  }

  for (const char of normalizedStr2) {
    if (!charCount[char]) {
      return false; // Character not found or count mismatch
    }
    charCount[char]--;
  }
*/

  // Create frequency maps for both strings
  const charCount = {};

  for (const char of normalizedStr1) { // Iterate through each character in the first string
    // Increment the count for each character in the first string
    charCount[char] = (charCount[char] || 0) + 1; // Initialize or increment the character count
  }

  for (const char of normalizedStr2) {
    if (!charCount[char]) {
      return false; // Character not found or count mismatch
    }
    charCount[char]--;
  }

  return Object.values(charCount).every(count => count === 0);
}

module.exports = isAnagram;
