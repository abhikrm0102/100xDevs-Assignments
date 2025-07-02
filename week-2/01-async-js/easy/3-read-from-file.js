/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require('fs');

// Function to read a file asynchronously
function readFileAndPrint(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);
    });
}

// Call the function with the path to your file
readFileAndPrint("example.txt");

// Simulating an expensive operation
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) { // Adjust the number to make it more expensive
        sum += i;
    }
    console.log('Sum of numbers from 0 to 1 billion:', sum);
