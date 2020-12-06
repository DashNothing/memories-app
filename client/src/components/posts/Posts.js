import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;
