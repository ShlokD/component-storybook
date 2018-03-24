import React, { Component } from 'react';
import './social-button.css';

export class SocialButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareExpanded: false
    };

    this._handleShareClick = this._handleShareClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
  }

  _handleShareClick() {
    this.setState({
      shareExpanded: true
    });
  }

  _handleCloseClick() {
    this.setState({
      shareExpanded: !this.state.shareExpanded
    });
  }

  render() {
    const shareButtonClass = `share-button ${
      this.state.shareExpanded ? 'share-expanded' : ''
    }`;
    const iconClass = `icon ${this.state.shareExpanded ? 'icon-expanded' : ''}`;

    return (
      <div className="social-button-container">
        <button className={shareButtonClass} onClick={this._handleShareClick}>
          Share
        </button>
        <div className="icons-container">
          <button className={`${iconClass} icon-fb`} />
          <button className={`${iconClass} icon-twitter`} />
          <button
            className={`${iconClass} icon-close`}
            onClick={this._handleCloseClick}
          />
        </div>
      </div>
    );
  }
}
