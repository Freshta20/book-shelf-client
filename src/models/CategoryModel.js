
const url = 'http://localhost:4000/api/v1/categories';

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
    return fetch(`${url}${categoryId}`, {
      method: "GET",
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