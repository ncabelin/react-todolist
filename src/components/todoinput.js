import React, { Component } from 'react';

class ToDoInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit() {
    this.props.addItem(this.state.value);
  }

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default ToDoInput;
