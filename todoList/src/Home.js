import React, { Component } from 'react';

import TodoList from './components/TodoList.js'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default Home;