import axios from "axios";

//유효값 : 1~100
export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);

//과제, 각각 하단의 API URL 처럼 param 값을 던져서 해당하는 회원만 화면상에 보여준다. (id의 유효값 : 1 ~ 10)
export const getUser = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
