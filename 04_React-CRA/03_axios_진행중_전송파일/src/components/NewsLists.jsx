import NewsItem from "./NewsItem";
import styled from "@emotion/styled/macro";
import usePromise from "../libs/usePromise";
import axios from "axios";

const NewsListsBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsLists = ({ category }) => {
  const [loading, resolved, error] = usePromise(() => {
    const query =
      category.category === undefined ? `` : `&category=${category.category}`;
    console.log(query);
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    );
  }, [category]);

  //대기 중일 때
  if (loading) {
    return <NewsListsBlock>Loading...</NewsListsBlock>;
  }
  //아직 resolved 값이 설정되지 않은 상태
  if (!resolved) {
    return null;
  }
  //에러 발생시
  if (error) {
    return <NewsListsBlock>Error...</NewsListsBlock>;
  }
  //rsolved 값에서 유효값이 들어왔을 때
  const { articles } = resolved.data;

  return (
    <NewsListsBlock>
      <h2>{category}</h2>
      <hr />
      <section>
        {articles.map((article, idx) => (
          <NewsItem key={idx} article={article} />
        ))}
      </section>
    </NewsListsBlock>
  );
};
export default NewsLists;
