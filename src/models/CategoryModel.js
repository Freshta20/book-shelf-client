
const url = 'http://localhost:4000/api/v1/categories';

export default class CategoryModel {
  static all = () => {
    return fetch(`${url}/index`).then(res => res.json())
  }
}







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