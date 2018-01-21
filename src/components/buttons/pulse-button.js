import React, { Component } from 'react';
import './pulse-button.css';

export class PulseButton extends Component {
  constructor(props) {
    super(props);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.state = {
      frequency: 1000,
      distance: 10
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.frequency !== this.state.frequency;
  }

  _onMouseMove(ev) {
    const boundingRect = this.refs.pulse.getBoundingClientRect();
    const { left, width, top, height } = boundingRect;
    const { screenX, screenY } = ev;
    const xCoord = screenX - (left + width / 2);
    const yCoord = screenY - (top + height / 2);
    const distance =
      Math.floor(Math.sqrt(Math.pow(xCoord, 2) + Math.pow(yCoord, 2))) / 100;
    const frequency = (parseInt(distance) + 2) * 100;
    this.setState({
      frequency,
      distance
    });
  }

  render() {
    return (
      <div
        ref="pulse"
        className="pulse-button-container"
        onMouseMove={this._onMouseMove}>
        <span
          className={`pulse-button-text ${
            this.state.distance < 5 ? 'is-visible' : 'is-hidden'
          }`}>
          This is a pulsing button
        </span>
        <button
          className="pulse-button"
          style={{
            animationDuration: `${this.state.frequency}ms`
          }}>
          Pulse
        </button>
      </div>
    );
  }
}
