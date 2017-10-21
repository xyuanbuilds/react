import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
    this.delete = this.delete.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.props.toggle(this.props.itemId)
  }
  delete() {
    this.props.delete(this.props.itemId)
  }
  render() {
    let completed = this.props.checked ? "completed" : ""
    let itemClassName = `todoItem ${completed}`;
    return (
      <li className={ itemClassName } >
        <input
        name={this.props.itemId} 
        type="checkbox" 
        className="toggle"
        checked={this.props.checked}
        onChange={this.toggle}
        />
        <label>{this.props.content}</label>
        <button className="delete" onClick={this.delete}>删 除</button>
      </li>
    );
  }
}

export default TodoItem;