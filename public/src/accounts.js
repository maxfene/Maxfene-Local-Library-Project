function findAccountById(accounts, id) {
  return accountById = accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((name1, name2) => name1.name.last.toLowerCase() < name2.name.last.toLowerCase() ? -1:1);

}

function getTotalNumberOfBorrows(account, books) {
  let array = books.reduce((borrowTally, book) => {book.borrows.map(data => data.id === account.id ? borrowTally.push(data) : null); 
    return borrowTally
}, [])
return array.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(book => book.borrows[0].id === account.id && book.borrows[0].returned === false)
    .map(book => {
      const author = authors.find(author => author.id === book.authorId)
      book.author = author
      return book
    })
  // let borrowedBooks = [];
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].borrows[0].id === account.id && books[i].borrows[0].returned === false) {
  //     console.log(books[i].authorId)
  //     const author = authors.find(author => author.id === books[i].authorId);
  //     books[i].author = author
  //     borrowedBooks.push(books[i])
  //   }
  // }
  // return borrowedBooks;
  //return books borrowed[0] if books borrowed[0].id === account.id using push method
  //if author id === book.authorId, push {...author}
//   const booksBorrowed = books.reduce((borrowedBooks, book) =>{book.borrows.filter(data => {
//     if (data.id === account.id && data.returned === false) {borrowedBooks.push(book)};
//   authors.forEach(author => {if (borrowedBooks.find(borrowedBook => borrowedBook.authorId) === author.id) {borrowedBooks.push({...author})}})
//   return borrowedBooks;
// }, [])
//  }
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
