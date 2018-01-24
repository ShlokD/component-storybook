import React, { Component } from "react";
import './social-button.css';

export class SocialButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareExpanded: false
    };

    this._handleShareClick = this._handleShareClick.bind(this);
  }

  _handleShareClick() {
    this.setState({
      shareExpanded: true
    });
  }

  render() {
    const shareButtonClass = `share-button ${this.state.shareExpanded ? 'share-expanded': ''}`;
    const iconClass = `icon ${this.state.shareExpanded ? 'icon-expanded': ''}`;

    return (<div className="social-button-container">
      <button className={shareButtonClass} onClick={this._handleShareClick}>Share</button>
      <button className={`${iconClass} icon-fb`} />
      <button className={`${iconClass} icon-twitter`}  />
      <button className={`${iconClass} icon-close`}  />
    </div>)
  }
}