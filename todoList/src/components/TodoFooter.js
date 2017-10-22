import React, { Component } from 'react';

class TodoFooter extends Component {

  render() {
    let view = this.props.view
    let showClearButton = this.props.showClearButton ? "" : "none"
    let buttonClassName = `clear ${showClearButton}`;
    return (
      <footer>
        <span>{this.props.leftItems} item left</span>
        <ul className="selectList">
          <li><a 
          href="javascript:;" 
            className={( view === 'all') ? 'selected': ''}
          onClick={ev => this.props.changeItems('all')} //这样的格式才可以传参
          >All</a></li>
          <li><a 
          href="javascript:;" 
            className={(view === 'active') ? 'selected' : ''}
          onClick={ev => this.props.changeItems('active')}
          >active</a></li>
          <li><a 
          href="javascript:;" 
            className={(view === 'completed') ? 'selected' : ''}
          onClick={ev => this.props.changeItems('completed')}
          >completed</a></li>
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