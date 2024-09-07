import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 0; i < array.length; i++) {
    array.push({
      id: i,
      text: `할 일 (${i})`,
    });
  }
  return array;
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 0,
  //     text: `할 일 (0)`,
  //   },
  //   {
  //     id: 1,
  //     text: `할 일 (1)`,
  //   },
  //   {
  //     id: 2,
  //     text: `할 일 (2)`,
  //   },
  //   {
  //     id: 3,
  //     text: `할 일 (3)`,
  //   },
  // ]);
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(0); //Unique Key 값을 할당하기 위한 초기 id값
  console.log(nextId); //{current: 0 -> 1 -> 2 -> ...}
  const onInsert = useCallback((textVal) => {
    const todoItem = {
      id: nextId.current,
      text: textVal,
    };
    setTodos((todos) => todos.concat(todoItem));
    nextId.current += 1;
    console.log(nextId);
  }, []);

  //각 할일 목록 리스트의 삭제 버튼을 클릭 했을 때
  const onRemove = useCallback(
    (idVal) => {
      const rest = todos.filter((todoVal) => todoVal.id !== idVal);
      console.log(rest);
      setTodos(rest);
    },
    [todos]
  );

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  );
};

export default App;
