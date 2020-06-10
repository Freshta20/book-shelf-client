
const book_url = 'http://localhost:4000/api/v1/books';

export default class CategoryModel {

  // POST new category
  static create = (categoryId, categoryData) => {
    return fetch(`${book_url}/${categoryId}/books/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(categoryData)
    })
    .then(res => res.json())
  }