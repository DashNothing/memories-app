import axios from "axios";

const URL = "https://memories-app-js-mastery-tut.herokuapp.com/posts";

export const fetchPosts = () => {
  return axios.get(URL);
};

export const createPost = (newPost) => {
  return axios.post(URL, newPost);
};

export const updatePost = (id, updatedPost) => {
  return axios.patch(`${URL}/${id}`, updatedPost);
};

export const deletePost = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export const likePost = (id) => {
  return axios.patch(`${URL}/${id}/likePost`);
};
