
const book_url =  'http://localhost:4000/api/v1/books';
// for heroku
// const book_url = `${process.env.REACT_APP_API_URL}/api/v1/books` || 'http://localhost:4000/api/v1/books';

export default class BookModel {

  // POST new book
  static create = (categoryId, bookData) => {
    return fetch(`${book_url}/${categoryId}/books/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(bookData)
    })
    .then(res => res.json())
  }

 // DELETE a category
 static delete = (categoryId, bookId) => {
  return fetch(`${book_url}/${categoryId}/books/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then(res => res.json())
}
}