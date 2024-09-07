import styled from "@emotion/styled/macro";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  return (
    <NewsItemBlock>
      <div className="thumbnail">
        <a href={article.url} target="_blank">
          <img src={article.urlToImage} alt={`${article.title} thumbnail`} />
        </a>
      </div>
      <div className="content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>
    </NewsItemBlock>
  );
};
export default NewsItem;
