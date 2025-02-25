//slice
const word = "abcdefghij";
console.log(word.slice(0)); //abcdefghij
console.log(word.slice(0, 2));  //0 - inclusive; 2 - exclusive
console.log(word.slice(3, 0));  //invalid
console.log(word.slice(3)); //defghij

//substr
console.log(word.substr(0, 3)); //from 0, read 3 char - abc
console.log(word.substr(3, 1)); //from 3, read 1 char - d
console.log(word.substr(0, 3));

//substring
console.log(word.substring(3)); //defghij
console.log(word.substring(0, 3));  //0 to 3 char - abc

