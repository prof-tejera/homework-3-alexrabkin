import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    return (
      <Panel backgroundColor="black">
        <Button text="Rewind" onClick={() => {}} className="default-button" />
        <Button
          text="Fast Forward"
          onClick={() => {}}
          className="default-button"
        />
        <Button
          text="Play"
          onClick={() => {}}
          className="default-button green"
        />
        <Button
          text="Stop"
          onClick={() => {}}
          className="default-button blue"
        />
      </Panel>
    );
  }
}

export default MediaButtons;
