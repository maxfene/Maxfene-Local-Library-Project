//HELPER FUNCTIONS
function _getBorrowsData(books, authors = []) {
  //returns an array of book objects that include title, number of times the book has been borrowed, and the author name
  return books.reduce((bookObj, book)=>{
    let numBorrows = book.borrows.length;
  bookObj.push({"Title": book.title, "Total Borrows": numBorrows, authorId: book.authorId, 
  "Author Name": authors.reduce((nameOf, author) => {
    if (author.id === book.authorId) {
      nameOf +=`${author.name.first} ${author.name.last}`} else {
        null} return nameOf}, "")});
  
  return bookObj}, []);
}

function _sortCount(array) {
  //sorts an array passed through it from greatest to least, stopping at the top five
  return array.sort((object1, object2) => object1.count > object2.count ? -1 : 1).slice(0,5);
 }

 //===========================================================================================

 function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
//returns the number of books currently loaned out
//book.borrows at the first index indicates whether or not the book is available in the library. If returned is false, the book is not available.
  const booksBorrowed = books.reduce((borrowedBooks, book) =>{ 
    book.borrows[0].returned? null : borrowedBooks.push(book.id);
    return borrowedBooks}, []);
    return booksBorrowed.length;
}

function getMostCommonGenres(books) {
  let commonGenresArray = books.reduce((result, book) => {
    let currentGenre = result.find(resultOne => resultOne.name === book.genre);
    if (!currentGenre) {result.push({"count": 1, "name": book.genre})} else {currentGenre.count++};
    return result;
}, [])
  return _sortCount(commonGenresArray);
//.sort((genreOne, genreTwo) => genreOne.count > genreTwo.count ? -1 : 1).slice(0, 5);
}

function getMostPopularBooks(books) {
//returns an array of five objects or fewer, with two keys --- name: (name of book), count: number of times the book has been borrowed
// use helper function to access an array of book objects including the number of times the book has been borrowed.
// compare # of borrows of each book.
//.reduce (x,y,[])
  let popularBooksArray = _getBorrowsData(books).reduce((totalBorrows, book) => {
    totalBorrows.push ({"count": book["Total Borrows"], "name": book["Title"]});
    return totalBorrows;
  }, []);
  return _sortCount(popularBooksArray);
}

function getMostPopularAuthors(books, authors) {
  //use _getBorrowsData to retrieve an array of book objects including number of borrows
  //returns a <=5 object array that represents authors whose books have been checked out the most--[{count: x, "authorFirst, authorLast"}]
  //count should be the total number of borrows for every book the author has written  
  let popularAuthorsArray = _getBorrowsData(books, authors).reduce((results, book) => {  
    let currentAuthor = results.find(resultOne => resultOne.name === book["Author Name"]);
         if (!currentAuthor) {results.push({"count": book["Total Borrows"], "name": book["Author Name"]})}
           else {currentAuthor["count"] += book["Total Borrows"]}
           return results;
    }, []);
    return _sortCount(popularAuthorsArray);
}
//get books.borrow.length
//check for author.id against book.authorsId
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
