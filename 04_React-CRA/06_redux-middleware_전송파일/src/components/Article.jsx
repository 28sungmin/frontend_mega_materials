import React from "react";

const Article = ({ post, loadingPost, articleId }) => {
  return (
    <section
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#ffa",
        minHeight: "240px",
      }}
    >
      <h2>기사문 연동 {`#${articleId}`}</h2>
      {loadingPost && "로딩 중..."}
      {!loadingPost && post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </section>
  );
};
export default Article;
