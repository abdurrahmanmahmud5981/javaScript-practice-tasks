/**Checking Array Membership with ‘includes’
 * Instructions:


 * Create an array of books containing different book.
 * Use the includes method to check if the array contains a javascript book.
 * Print a message to the console indicating whether the element is present in the array or not.
 * 
 * 
 * 
 * 
 *
 */

const books = ['html', 'css', 'javascript', 'react', 'node', 'python'];
console.log(books.includes('javascript'));
console.log(books.includes('java'));
console.log(books.includes('html', 2));
console.log(books.includes('html', 5));
console.log(books.includes('html', -1));
console.log(books);