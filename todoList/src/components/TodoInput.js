import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      inEdit: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  // 受控组件后的绑定事件
  handleChange (e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  // 提交新todo
  submit (e) {
    if(e.keyCode === 13 ) {
      let add = this.state.value.trim()
      if(!add) return;
      this.props.addItem(add);
      this.setState({ value: '' })
      this.setState({ isEdit: false})
    }
  }

  render() {
    return (
      <div className="todoInput">
        <label>
       Todo：
        </label>
        <input 
          name="add"
          type="text" 
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.submit}
          placeholder="你想做点什么"
        />
      </div>
    );
  }
}

export default TodoInput;