import React from 'react';

const ToDoItem = (props) => {
  return (
    <li onClick={() => props.remove(props)}>{props.item}</li>
  );
}

export default ToDoItem;
