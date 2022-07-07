function findAuthorById(authors, id) {
  return authorById = authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return bookById = books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //returns an array with two arrays; one that holds books that are borrowed; the other holds books that have been returned
  //if books.borrows[0].returned === true, push to array1; else push to array2;
 
  let borrowedBooks = books.reduce((booksBorrowed, book) =>{ 
    book.borrows[0].returned ? null : booksBorrowed.push(book)
    return booksBorrowed}, []);;
  let availableBooks =  books.reduce((booksAvailable, book) =>{ 
     book.borrows[0].returned ? booksAvailable.push(book) : null
    return booksAvailable}, []);;
 const booksByBorrowedStatus = [
    borrowedBooks,
    availableBooks,
  ];
  return booksByBorrowedStatus;
}

function getBorrowersForBook(book, accounts) {
//should return an array of ten or fewer account objects whose ids match a borrowers' id in the book object.
//each account object should include the returned entry associated with their book usage.
//how to access borrowers' id?
//how to limit array to ten or less?
//how to combine account object with borrows object
let results = accounts.reduce((total, account) => {
    let matchingBorrower = book.borrows.find(borrow => borrow.id === account.id);
    if (matchingBorrower) {total.push({...account, ...matchingBorrower})};
    return total;
  }, []);
  return results;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
