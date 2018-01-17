import React, { Component } from "react";
import './clap-button.css';

export class ClapButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clapCount: 0,
      clapCounterVisible: false
    };

    this._onClick = this._onClick.bind(this);
    this._resetClapCounter = this._resetClapCounter.bind(this);
  }

  _onClick() {
    const newClapCount = this.state.clapCount < this.props.maxClap ? this.state.clapCount + 1 : this.state.clapCount;
    this.setState({
      clapCount: newClapCount,
      clapCounterVisible: true
    });
    setTimeout(this._resetClapCounter, 800);
  }

  _resetClapCounter() {
    this.setState({
      clapCounterVisible: false
    });
  }

  render() {
    return (
      <div className="clap-button-container">
        <div className={`clap-counter ${this.state.clapCounterVisible ? 'is-visible' : 'is-hidden'}`}>{this.state.clapCount}</div>
        <button className="clap-button" onClick={this._onClick}></button>
      </div>
    );
  }
};

ClapButton.defaultProps = {
  maxClap: 10
};