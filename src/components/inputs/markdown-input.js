import React, { Component } from 'react';
import Remarkable from 'remarkable';
import './markdown-input.css';

export class MarkdownInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
    this.md = new Remarkable();
    this.md.set({
      breaks: true
    });
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange() {
    const markdownInput = this.refs.markdownInput.value;
    console.log(markdownInput);
    this.setState({
      markdown: this.md.render(markdownInput)
    });
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="markdown-input-container">
        <textarea
          onChange={this._handleTextChange}
          ref="markdownInput"
          className="markdown-input"
          rows="12"
          cols="50"
          placeholder="Enter markdown here"
        />
        <div
          className="markdown-output"
          dangerouslySetInnerHTML={{ __html: this.state.markdown }}
        />
      </div>
    );
  }
}
