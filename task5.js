// LEVEL 1

// Exercise 1

// function that console.log a message each 1 second



function printEachSecond() {
    setInterval(() => console.log('Printing message each second'), 1000);
}
printEachSecond();


// Excersice 2
const fs = require('fs');

function writeSentenceInFile(filename, sentence) {
    fs.writeFileSync(filename, sentence);
}

writeSentenceInFile('Exercise5_Output.txt', "Hello, I'm coming from task5.js");

// Excersice 3
function readContentFromFile(filename) {
    console.log(fs.readFileSync(filename, 'utf8'));
}

readContentFromFile('Exercise5_Output.txt');


// LEVEL 2
// Exercise 1
const { createGzip } = require('zlib');

function zipFile(filename) {
    const readStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream(filename + '.gz');

    readStream
        .pipe(createGzip())
        .pipe(writeStream);
}

zipFile('Exercise5_Output.txt');

// Exercise 2
const { spawn } = require('child_process');

function printUserHomeContent() {
    let child;
    let homePath;
    // Command is different in Windows and Linux/Mac
    // NOT Tested in windows. Only tested in MacOS.
    if (process.platform.includes('win32')) {
        homePath = process.env['USERPROFILE'];
        child = spawn('dir', [homePath], {shell: true});
    } else {
        homePath = process.env['HOME'];
        child = spawn('ls', [homePath], {shell: true});
    }
    child.stdout.on('data', (data) => {
      console.log(`\n--- User Folder Content ---\n${data}`);
    });
}

printUserHomeContent(); 


// LEVEL 3

function encodeFile(filename) {
    const fileContent = fs.readFileSync(filename);

    const base64Content = fileContent.toString('base64');
    const hexContent = fileContent.toString('hex');

    fs.writeFileSync(filename + '.base64', base64Content);
    fs.writeFileSync(filename + '.hex', hexContent);

}

encodeFile('Exercise5_Output.txt');


var crypto  = require( 'crypto' );
// This keys should be static in order to reuse being able to decode data 
// in the future. But for learning purposes, I'm using a random key.
// AES192 key
const DATA_CRYPT_KEY = Buffer.from("5451CEFA2A63345CBE3DD8788058BFE5447CAE223317A12A", "hex");
const DATA_CRYPT_IV = Buffer.from("8FFED018B16D4A7DB92D6FDF4F1394F5", "hex");
function encryptFile(filename, encode) {
    const content = fs.readFileSync(filename);
    fs.unlinkSync(filename);

    let cipher  = crypto.createCipheriv('aes-192-cbc', DATA_CRYPT_KEY, DATA_CRYPT_IV);
    
    let cryptedContent = cipher.update(content, encode, encode);
    cryptedContent += cipher.final(encode);
    
    fs.writeFileSync(filename, cryptedContent);
}

encryptFile('Exercise5_Output.txt.hex', 'hex');
encryptFile('Exercise5_Output.txt.base64', 'base64');


function decryptFile(filename, encode) {
    const content = fs.readFileSync(filename);

    let decipher  = crypto.createDecipheriv('aes-192-cbc', DATA_CRYPT_KEY, DATA_CRYPT_IV);
    
    let decryptedContent = decipher.update(content, encode, encode);
    decipher.setAutoPadding(false);
    decryptedContent += decipher.final(encode);
    
    fs.writeFileSync(filename + '.decripted', decryptedContent);
}


decryptFile('Exercise5_Output.txt.hex', 'hex');
decryptFile('Exercise5_Output.txt.base64', 'base64');
