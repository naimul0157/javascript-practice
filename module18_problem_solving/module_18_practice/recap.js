const books = ['physics', 'javascript', 'css', 'math'];
const numbers = [12, 5, 3, 100, 112, 2];
let copy_book = [...books];
let reverse = copy_book.reverse();
// sorted the value of array
console.log('books list:', books)
console.log('books reverse list:', reverse);
console.log("books sorted list:", books.sort());
// sorted the numarical value

console.log("Number sort:", numbers.sort(function(a, b){return a-b}));


