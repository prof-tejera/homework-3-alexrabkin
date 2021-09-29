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
        <Input
          placeholder="username"
          onChange={(username) => console.log(username)}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(password) => console.log(password)}
        />
        <Button
          text="Login"
          className="Default-button Green-button"
          onClick={this.handleSubmit}
        />
      </>
    );
  }
}

export default LoginForm;
