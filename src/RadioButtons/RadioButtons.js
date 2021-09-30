import { Component } from 'react';
import Button from 'components/Button/Button';
import './RadioButtons.css';

class RadioButtons extends Component {
  handleOnClick = (e) => {
    console.log(e.target.innerHTML);
  };

  render() {
    const { options } = this.props;
    return (
      <>
        {options.map((option) => {
          return (
            <Button
              key={option.value}
              text={option.value}
              className="default-button blue-hover"
              onClick={this.handleOnClick}
            />
          );
        })}
      </>
    );
  }
}

export default RadioButtons;
