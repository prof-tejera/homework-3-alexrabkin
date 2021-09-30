import { Component } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import './LoginForm.css';

class LoginForm extends Component {
  handleSubmit = () => {
    console.log('Submitting form...');
  };

  render() {
    return (
      <>
        <div className="form">
          <Input
            placeholder="username"
            onChange={(username) => console.log(username)}
          />
          <br />
          <Input
            placeholder="password"
            type="password"
            onChange={(password) => console.log(password)}
          />
          <br />
          <Button
            text="Login"
            className="default-button green"
            onClick={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}

export default LoginForm;
