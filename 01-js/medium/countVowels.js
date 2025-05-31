/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

/*
// Below  is the whole snipet provided in the original code snippet as question prompt

function countVowels(str) {
    // Your code here
}

module.exports = countVowels;

*/

// Solution: -
function countVowels(str) {
    str = str.toLowerCase(); // Convert the string to lowercase
    const vowels = ['a','e','i','o','u']; // Define the vowels
    let count = 0; // Initialize a counter
    for (let char of str) { // Iterate through each character in the string
        if (vowels.includes(char)) { // Check if the character is a vowel
            count++; // Increment the counter if it is a vowel
        }
    }
    return count; // Return the total count of vowels
}

module.exports = countVowels;
