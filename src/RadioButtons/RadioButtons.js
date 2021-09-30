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
        {options.map((page) => {
          return (
            <Button
              key={page.value}
              text={page.value}
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
