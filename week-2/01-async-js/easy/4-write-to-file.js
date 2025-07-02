/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
You have to append to the file, not overwrite it.
*/

const fs = require('fs');

/*
// This code snippet is commented out to avoid confusion with the current task as it overwrites the whole content of the file.

// Function to write to a file asynchronously
function writeFileAsync(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File written successfully');
    });
}
*/

function writeFileAsync(filePath, content) {
    fs.appendFile(filePath, content + '\n', 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File written successfully');
    });
}


// Call the function with the path to your file and the content you want to write
writeFileAsync('example.txt', 'Hello, this is a test content added with fs.appendFile function!');
