import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);

  const postList = posts.map((post) => {
    return (
      <Article
        key={post.id}
        date={post.date}
        title={post.title}
        preview={post.preview}
      />
    );
  });

  return <main>{postList}</main>;
}

export default ArticleList;
