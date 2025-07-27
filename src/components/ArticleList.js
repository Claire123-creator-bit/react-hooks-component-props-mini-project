import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="article-list">
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
