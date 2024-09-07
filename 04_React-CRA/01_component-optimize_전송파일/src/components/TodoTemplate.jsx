import React from "react";
import styled from "@emotion/styled";

const TodoTemplateCover = styled.div`
  width: 480px;
  margin: 4rem auto;
  border-radius: 4px;
  padding: 20px;
  overflow: hidden;
`;
const Headline = styled.h1`
  border-left: 4px solid #00f;
`;
const AppTitle = styled.div`
  background-color: #22b8cf;
  color: #fff;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;
const Content = styled.div`
  background-color: #eee;
`;
// as라는 속성을 통해 태그를 자유롭게 변경할 수 있음
const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateCover /*as="section"*/ className="TodoTemplate">
      {/* <Headline as="h3">TodoTemplate</Headline> */}
      <AppTitle className="app-title">일정 관리</AppTitle>
      <Content className="content">{children}</Content>
    </TodoTemplateCover>
  );
};
export default TodoTemplate;
