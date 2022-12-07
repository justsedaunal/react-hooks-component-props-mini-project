import React from "react";
import blogData from "../data/blog";
console.log(blogData.posts);

function Article({ title, date, preview }) {
  // console.log(post);

  // const date = "January 1, 1970"; //default value if there is no date

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview} </p>
    </article>
  );
}

export default Article;
