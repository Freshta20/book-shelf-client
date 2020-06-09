import axios from 'axios';

const categoryEndpoint = 'http://localhost:4000/api/v1/categories';
const cookieAxios = axios.create({
  withCredentials: true
});
export default class CategoryModel {
  // index rout
  static index = () => {
    const request = cookieAxios.get(categoryEndpoint);
    return request;
  }
}