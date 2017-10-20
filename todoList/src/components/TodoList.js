import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id:12,
          checked: false,
          content: 'item1'
        },
        {
          id:23,
          checked: false,
          content: 'item2'
        },
        {
          id:45,
          checked: false,
          content: 'item3'
        }
      ]
    }
    this.add = this.add.bind(this)
    this.toggle = this.toggle.bind(this)
    this.delete = this.delete.bind(this)
  }

  generateId () {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  add (content) {
    var items = this.state.items
    var id = this.generateId()
    var checked = false
    var newItem = {
      'id':id,
      'checked':checked,
      'content':content
    }
    items = items.concat(newItem)
    this.setState({ items })
  }

  delete (itemId) {
    var items = this.state.items
    items = items.filter((item) => {
      return item.id !== itemId
    })
    this.setState({ items });
  }

  toggle (toggleId) {
    var items = this.state.items;
    for (var i in items) {
      if (items[i].id === toggleId) {
        items[i].checked = items[i].checked === true ? false : true;
        break;
      }
    } 
    console.log(toggleId)
    this.setState({ items: items });
  }

  render() {
    var itemList = this.state.items.map((item) => {
      return (
        <TodoItem
        itemId = {item.id}
        key = {item.id}
        content  = {item.content}
        checked = {item.checked}
        toggle = {this.toggle}
        delete = {this.delete}
        />
      )
    })

    return (
      <div className="todoList" >
        <TodoInput 
        generateId={this.generateId}
        addItem={this.add}
        />
        {itemList}
      </div>
    );
  }
}

export default TodoList;