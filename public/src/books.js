function findAuthorById(authors, id) {
return authors.find((author) => author.id == id);
}
function findBookById(books, id) {
  return books.find((book) => book.id === id); 
  
}

function partitionBooksByBorrowedStatus(books) {
let yesReturn= [];
let noReturn = [];
  for (let i in books) {
   let borrowedBook = books[i].borrows;
   // console.log(borrowedBook);
    if (borrowedBook[0].returned === true) {    //originally had books.borrows.returned
      yesReturn.push(books[i]);
    }  if (borrowedBook[0].returned === false) {  //originally had books.borrows.returned
      noReturn.push(books[i]);
    } // I need a return statement here (return borrowedBook)
  }
return [noReturn, yesReturn]
}

function getBorrowersForBook(book, accounts) {
  const findId = book.borrows;   //initialize a variable to start
  const borrowed = findId.map((borrow) =>  {      //loop through the book borrows id
    const person = accounts.find((person) => borrow.id === person.id);   //find accounts id that match
      return {...borrow, ...person};  //the spread operator shorts the code to gather entire list matching Id
  });
  borrowed.length = 10;

  return borrowed
} 
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
