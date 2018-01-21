import React, { Component } from 'react';
import './email-signup.css';

export class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };

    this._handleEmailSubmit = this._handleEmailSubmit.bind(this);
  }

  _handleEmailSubmit() {
    const emailValue = this.refs.emailField.value;
    this.refs.emailField.value = '';
    this.setState({
      submitted: true
    });

    if (typeof this.props.onEmailSubmit === 'function') {
      this.props.onEmailSubmit(emailValue);
    }
  }

  render() {
    const signupButtonClass = `email-signup-submit ${
      this.state.submitted ? 'submitted' : ''
    }`;
    const text = this.state.submitted ? 'Thank you!' : 'Sign up now';
    return (
      <div className="email-signup-container">
        <input
          ref="emailField"
          className="email-signup-field"
          type="email"
          maxLength="50"
        />
        <button className={signupButtonClass} onClick={this._handleEmailSubmit}>
          {text}
        </button>
      </div>
    );
  }
}

EmailSignup.defaultProps = {};
