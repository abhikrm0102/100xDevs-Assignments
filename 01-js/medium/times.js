/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

/*
// below is a template, you can use it to write your code
function calculateTime(n) {
    let timeTaken = 0;
    // Put your code here
    return timeTaken;
}
*/

function calculateTime(n) {
    let currentTime = new Date().getTime();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let endTime = new Date().getTime();
    let timeTaken = (endTime - currentTime) / 1000; // Convert milliseconds to seconds
    return timeTaken;
}

let timeFor100 = calculateTime(100);
let timeFor100000 = calculateTime(100000);
let timeFor1000000000 = calculateTime(1000000000);
console.log(`Time taken for sum from 1 to 100: ${timeFor100} seconds`);
console.log(`Time taken for sum from 1 to 100000: ${timeFor100000} seconds`);
console.log(`Time taken for sum from 1 to 1000000000: ${timeFor1000000000} seconds`);
// Note: The last case (1 to 1 billion) may take a significant amount of time and could potentially freeze the browser or environment if not handled properly.