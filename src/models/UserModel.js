// comunicating with the Api
// import axios from 'axios';

const REACT_APP_API = `${process.env.REACT_APP_API_URL}/api/v1/auth` || 'http://localhost:4000/api/v1/auth';
// make an instance of axios that enables passing of cookies
// const cookieAxios = axios.create({
//   withCredentials: true
// });
export default class UserModel {
  // register user 
  static create (data) {
   return fetch(`${REACT_APP_API}/register`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(data)
   }).then(res => res.json())
  }

  // login user
  static login (credentials) {
   return fetch(`${REACT_APP_API}/login`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     credentials: 'include',
     body: JSON.stringify(credentials)
   }).then(res => res.json())
  }

  // logout user 
  static logout() {
    return fetch(`${REACT_APP_API}/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
   } 
}