import styled from "@emotion/styled";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import clsx from "clsx";

const TodoListItemTag = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-of-type(2n) {
    background-color: #f8f9fa;
  }
  .text {
    flex: 1;
    font-size: 1.5rem;
  }
  .remove {
    cursor: pointer;
    color: #ff3737;
    font-size: 1.5rem;
    &:hover {
      color: #ff1717;
    }
  }
`;

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text } = todo;

  return (
    //   <h2>TodoListItem</h2>
    <TodoListItemTag className="TodoListItem" data-idnum={id}>
      <div className="text">{todo.text}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemTag>
  );
};
export default TodoListItem;
