import React, { Component } from 'react';
import ToDoItem from './todoitem';



const ToDoList = (props) => {
  const listItems = props.list.map((item, index) => {
    return (
      <ToDoItem item={item} key={'key_' + index} remove={props.remove}/>
    );
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default ToDoList;
