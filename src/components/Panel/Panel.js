import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
