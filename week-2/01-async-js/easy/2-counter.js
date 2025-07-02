/*
## Assignment: 2-counter in JavaScript
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

let counter = 0;

function incrementCounter() {
    console.log(counter);
    counter++;
    setTimeout(incrementCounter, 1000); // Call the function again after 1 second
}

incrementCounter(); // Start the counter

// setTimeout is used here to create a delay of 1 second before calling the incrementCounter function again, effectively mimicking the behavior of setInterval without using it directly. This allows the counter to increment every second.