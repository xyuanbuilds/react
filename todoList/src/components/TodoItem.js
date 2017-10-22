import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state= {
      value: '',
      isEditing: false
    }
    this.isEsc = false;
    this.delete = this.delete.bind(this)
    this.toggle = this.toggle.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.itemEditDone = this.itemEditDone.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  toggle() {
    this.props.toggle(this.props.itemId)
  }

  delete() {
    this.props.delete(this.props.itemId)
  }

  onEdit() {
    // 取出当前todo的value
    let { content } = this.props;

    this.setState({
      value: content,
      isEditing: true
    }, () => {
      this.refs.editInput.focus()
    });
  }
  
  onBlur() {
    if (this.isEsc === true) { this.isEsc = false; return; }
    this.itemEditDone();
  }

  onEnter(ev) {
    if (ev.keyCode === 27) {
      this.isEsc = true;
      //console.info(this.isEsc);
      this.setState({ isEditing: false });//让输入框消失
      return;
    }
    if (ev.keyCode !== 13) return;
    this.itemEditDone();
  }

  itemEditDone() {
    //让输入框消失
    this.setState({ isEditing: false });
    //开始保存修改的todo内容
    let { editItems, itemId } = this.props;   //取出传递进来的itemEditDone函数,todo
    editItems(itemId, this.state.value);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  render() {
    let completed = this.props.checked ? "completed" : ""
    let isEditing = this.state.isEditing ? "editing" : ""
    let itemClassName = `todoItem ${completed} ${isEditing}`;
    return (
      <li className={ itemClassName } >
        <div className="view">
          <input
          name={this.props.itemId} 
          type="checkbox" 
          className="toggle"
          checked={this.props.checked}
          onChange={this.toggle}
          />
          <label
          onDoubleClick={this.onEdit}
          >{this.props.content}</label>
          <button className="delete" onClick={this.delete}>删 除</button>
        </div>
        <input 
        type="text" 
        className="edit"
        ref="editInput"
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.onBlur}
        onKeyDown={this.onEnter}
        />
      </li>
    );
  }
}

export default TodoItem;