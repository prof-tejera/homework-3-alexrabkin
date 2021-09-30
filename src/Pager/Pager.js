import { Component } from 'react';
import Button from 'components/Button/Button';
import './Pager.css';

class Pager extends Component {
  handleOnClick = (e) => {
    console.log(e.target.innerHTML);
  };

  render() {
    const { numPages } = this.props;
    const pagesList = [...Array(numPages).keys()];

    return (
      <>
        <Button text="<" className="default-button" />
        {pagesList.map((page) => {
          const actualPage = page + 1;
          return (
            <Button
              key={actualPage}
              text={actualPage}
              className="default-button blue-hover"
              onClick={this.handleOnClick}
            />
          );
        })}
        <Button text=">" className="default-button" />
      </>
    );
  }
}

export default Pager;
