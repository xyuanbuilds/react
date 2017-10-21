import React, { Component } from 'react';

class TodoFooter extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let showClearButton = this.props.showClearButton ? "" : "none"
    let buttonClassName = `clear ${showClearButton}`;
    return (
      <footer>
        <span>{this.props.leftItems} item left</span>
        <ul className="selectList">
          <li><a 
          href="javascript:;" 
          className="selected"
          onClick={this.props.changeItems}
          >All</a></li>
          <li><a 
          href="javascript:;" 
          className=""
          onClick={this.props.changeItems}
          >active</a></li>
          <li><a 
          href="javascript:;" 
          className=""
          onClick={this.props.changeItems}
          >complete</a></li>
        </ul>
        <button 
          className={buttonClassName}
        onClick={this.props.clear}
        >clear</button>
      </footer>
    );
  }
}

export default TodoFooter;