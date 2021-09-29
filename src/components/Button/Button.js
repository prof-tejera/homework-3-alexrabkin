import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
