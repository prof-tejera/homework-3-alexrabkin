import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';

class App extends Component {
  render() {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Login form component</header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component</header>
          <div className="App-content">
            <Pager numPages={10} />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component</header>
          <div className="App-content">
            <RadioButtons options={options} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
