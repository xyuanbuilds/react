import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';

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
      ],
      view: 'all'
    }
    this.getleftItems = this.getleftItems.bind(this)
    this.add = this.add.bind(this)
    this.clear = this.clear.bind(this)
    this.toggle = this.toggle.bind(this)
    this.delete = this.delete.bind(this)
  }

  generateId () {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  changeItems () {
    switch () {
      case this.e.target === all

      case this.e.target === active
      case this.e.target === complete
    }
  }

  getleftItems () {
    var items = this.state.items
    var leftArr = items.filter((item) => {
      return item.checked === false
    })
    return leftArr.unshift() 
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

  clear () {
    var items = this.state.items
    items = items.filter((item) => {
      return item.checked === false
    })
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
        if (items[i].checked) {
          this.state.leftItems --
        } else {
          this.state.leftItems ++
        }
        break;
      }
    } 
    console.log(toggleId)
    this.setState({ items: items });
  }

  render() {
    var leftItems = this.state.items.length
    var itemList = this.state.items.map((item, index) => {
      if (item.checked) leftItems--;
      return (
        <TodoItem
        itemId = {item.id}
        key = {item.id}
        content  = {item.content}
        checked = {item.checked}
        toggle = {this.toggle}
        delete = {this.delete}
        key = {index}
        />
      )
    })

    var showClearButton = (leftItems < this.state.items.length)
    
    if (this.state.items.length) {  // 无items则不显示footer
      var footer = (
        <TodoFooter
          changeItems={this.changeItems}
          clear={this.clear}
          showClearButton={showClearButton}
          leftItems={leftItems}
        />
      )
    }
    return (
      <div className="todoList" >
        <TodoInput 
        generateId={this.generateId}
        addItem={this.add}
        />
        <ul className="itemList">
          {itemList} 
          {footer}
        </ul>
      </div>
    );
  }
}

export default TodoList;