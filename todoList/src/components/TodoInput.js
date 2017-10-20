import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange (input) {
    this.setState({ value: input.target.value });
  }

  submit (e) {
    e.preventDefault();
    if(e.keyCode !==13 ) return // 判断是否是enter输入
    var add = this.state.value.trim()
    if(!add) {
      return;
    }
    this.props.addItem(add);
    add = "";
    this.setState({ value: add })
  }

  render() {
    return (
      <div className="todoInput">
        <label>
        新增输入
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