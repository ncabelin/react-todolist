import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ToDoInput from './components/todoinput';
import ToDoList from './components/todolist';
import Button from './components/addbutton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      list: ['doodoo','shit','poop','explosive diarrhea']
    };

    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
  }

  addItem(value) {
    let list = this.state.list;
    list.push(value);
    this.setState({ list: list});
  }

  remove(item) {
    let list = this.state.list;
    const index = list.indexOf(item.item);
    if (index > -1) {
      list.splice(index, 1);
      this.setState({ list: list});
    }

  }

  render() {
    return (
      <div>
        <ToDoInput
          addItem={this.addItem}
        />
        <ToDoList list={this.state.list} remove={this.remove}/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
