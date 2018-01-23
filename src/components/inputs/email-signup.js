import React, { Component } from 'react';
import './email-signup.css';

export const isValidEmail = email => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(email);
};

export class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      valid: true
    };

    this._handleEmailSubmit = this._handleEmailSubmit.bind(this);
    this._checkValidEmail = this._checkValidEmail.bind(this);
  }

  _handleEmailSubmit() {
    const emailValue = this.refs.emailField.value;
    if (isValidEmail(emailValue)) {
      this.refs.emailField.value = '';
      this.setState({
        valid: true,
        submitted: true
      });

      if (typeof this.props.onEmailSubmit === 'function') {
        this.props.onEmailSubmit(emailValue);
      }
    } else {
      this.setState({
        valid: false
      });
    }
  }

  _checkValidEmail() {
    const emailValue = this.refs.emailField.value;
    this.setState({
      valid: isValidEmail(emailValue)
    });
  }

  render() {
    const signupButtonClass = `email-signup-submit ${
      this.state.submitted ? 'submitted' : ''
    }`;

    const signupFieldClass = `email-signup-field ${
      this.state.valid ? 'valid' : 'invalid'
    }`;

    const text = this.state.submitted ? 'Thank you!' : 'Sign up now';
    return (
      <div className="email-signup-container">
        <input
          ref="emailField"
          className={signupFieldClass}
          type="email"
          maxLength="50"
          placeholder="jatindas@example.com"
          onBlur={this._checkValidEmail}
        />
        <button className={signupButtonClass} onClick={this._handleEmailSubmit}>
          {text}
        </button>
      </div>
    );
  }
}

EmailSignup.defaultProps = {};
