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

  const normalize = str => 
    str
      .replace(/[^a-z0-9]/gi, '') // Remove non-alphanumeric chars
      .split('')                  // Split into characters
      .sort()                     // Sort alphabetically
      .join('');                  // Join back to string

  // Compare the normalized versions of both strings.
  // If they are equal, the strings are anagrams.
  return normalize(normalizedStr1) === normalize(normalizedStr2);
}

// Export the function for use in other modules
module.exports = isAnagram;


