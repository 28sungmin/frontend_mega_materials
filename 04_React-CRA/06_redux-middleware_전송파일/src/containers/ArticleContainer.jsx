import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Article from "../components/Article";
import { getPost } from "../modules/article";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const ArticleContainer = ({ getPost, post, loadingPost }) => {
  const [articleId, setArticleId] = useState(1);
  useEffect(() => {
    getPost(articleId);
  }, [getPost, articleId]);

  const handlePrev = () => {
    setArticleId(articleId - 1);
  };
  const handleNext = () => {
    setArticleId(articleId + 1);
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#eee",
        paddingTop: "10px",
      }}
    >
      <p>1~100개의 기사</p>
      <Article post={post} loadingPost={loadingPost} articleId={articleId} />
      <div>
        {articleId > 1 && (
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <SlArrowLeft size={20} />
          </button>
        )}
        {articleId < 100 && (
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <SlArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
export default connect(
  ({ article }) => ({
    post: article.post,
    loadingPost: article.loading.GET_POST,
  }),
  {
    getPost,
  }
)(ArticleContainer);
