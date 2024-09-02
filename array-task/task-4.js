/**
 * Checking if it's an Array
 * Instructions:
 * 
 * Create different variables, each containing either an array or a non-array value.
 * Now use isArray to check if each variable is an array.
 * Print a message to the console indicating whether each variable is an array or not.
 */

const array = [1, 2, 3, 4, 5];
console.log(Array.isArray(array));
const string = 'hello';
console.log(Array.isArray(string));
const object = { name: 'John', age: 30 };
console.log(Array.isArray(object))