import React, { Component } from 'react';

class Prop extends Component {
  render(){
    return (
      <div> change {this.props.prop.name} </div>
    )
  }
}
export default Prop;
