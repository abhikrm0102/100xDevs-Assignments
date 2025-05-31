/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

/*
// The code below is the original snipet as a question
function isPalindrome(str) {
  // code here
  return true/false;
}

module.exports = isPalindrome;
*/

// Solutions: -

/*
// My code solution
function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '').replace(/\s+/g, '').toLowerCase(); // Normalize the string by removing non-alphanumeric characters, spaces, and converting to lowercase
  const len = str.length; // Get the length of the string
  let str2 = ''; // Initialize an empty string to hold the reversed string
  for (let i=1; i <= len; i++) { // Iterate through the string in reverse order
    str2 += str[len - i]; // Append each character to the reversed string
  }
  // Check if the original string is equal to the reversed string
  if (str === str2) {
    return true; // If they are equal, it is a palindrome
  }
  else {
    return false; // If they are not equal, it is not a palindrome
  }
}
*/


// form AI
function isPalindrome(str) {
  const normalized = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}


module.exports = isPalindrome;
