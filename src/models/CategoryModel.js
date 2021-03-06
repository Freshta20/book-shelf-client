
const url = 'http://localhost:4000/api/v1/categories';
// for heroku
// const REACT_APP_API = `${process.env.REACT_APP_API_URL}/api/v1/auth` || 'http://localhost:4000/api/v1/auth';


export default class CategoryModel {
// GET all categories
  static all = () => {
    console.log(url);
    return fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
    .then(res => res.json())
  }

  // GET Show category
  static show = (categoryId) => {
    return fetch(`${url}/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
    .then(res => res.json())
  }

  // POST new category
  static create = (categoryData) => {
    return fetch(`${url}/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(categoryData)
    })
    .then(res => res.json())
  }

  // PUT a category
  static update = (categoryId, categoryData) => {
    return fetch(`${url}/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(categoryData)
    })
    .then(res => res.json())
  }

  // DELETE a category
  static delete = (categoryId) => {
		return fetch(`${url}/${categoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
		})
		.then(res => res.json())
	}

}




// static login (credentials) {
//    return fetch(`${REACT_APP_API}/login`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json"
//      },
//      credentials: 'include',
//      body: JSON.stringify(credentials)
//    }).then(res => res.json())
//   }


// const cookieAxios = axios.create({
//   withCredentials: true
// });
// export default class CategoryModel {
//   // index rout
//   static index = () => {
//     const request = cookieAxios.get(categoryEndpoint);
//     return request;
//   }
// }