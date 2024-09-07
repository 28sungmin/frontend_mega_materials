import React, { useState, useCallback, useRef } from "react";
import { MdAdd } from "react-icons/md";
import styled from "@emotion/styled";

const FormTag = styled.form`
  display: flex;
  background-color: #495057;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #fff;
    padding: 10px 20px;
    flex: 1; // 버튼 영역을 제외한 모든 영역을 차지
    &::placeholder {
      color: #dee2e6;
    }
  }
  button {
    border: none;
    outline: none;
    background-color: #868e96;
    color: #fff;
    padding: 0 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #adb5bd;
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const searchRef = useRef(null);
  console.log(searchRef);
  const [value, setValue] = useState("");

  const onChangeEvt = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmitEvt = useCallback(
    (e) => {
      e.preventDefault();
      if (value.trim() === "") {
        setValue("");
        searchRef.current.focus();
        return;
      }
      onInsert(value);
      setValue("");
      searchRef.current.focus();
    },
    [onInsert, value]
  );

  return (
    <FormTag onSubmit={onSubmitEvt}>
      {/* <h2>TodoInsert</h2> */}
      <input
        ref={searchRef}
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={onChangeEvt}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </FormTag>
  );
};
export default TodoInsert;
