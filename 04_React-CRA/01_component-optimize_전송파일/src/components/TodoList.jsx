import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove }) => {
  return (
    <>
      {/* jsx 문법에서 데이터가 존재하지 않을 때, map에서 에러가 발생하기 때문에 데이터의 값이 있다면 map을 허용시켜주어야 함 (Otional Chainning을 적용해 주어야 함) */}
      {todos &&
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
    </>
  );
};
export default TodoList;
