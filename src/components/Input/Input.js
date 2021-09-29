import { Component } from 'react';

class Input extends Component {
  render() {
    const { onChange, placeholder, ...rest } = this.props;
    return (
      <>
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        />
      </>
    );
  }
}

export default Input;
