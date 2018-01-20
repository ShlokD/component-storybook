import React, { Component } from 'react';
import './multi-question-input.css';

export class MultiQuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0
    };
    this.completed = [];

    this._onNextQuestion = this._onNextQuestion.bind(this);
  }

  _onNextQuestion() {
    const length = this.props.questions.length;
    const { questionIndex } = this.state;

    if (questionIndex < length) {
      const answer = this.refs.answer.value;
      this.refs.answer.value = "";
      this.completed.push({ question: this.props.questions[questionIndex], answer});
    }
    
    if (questionIndex < length - 1) {
      this.setState({
        questionIndex: questionIndex + 1
      });
    } else {
      console.log(this.completed);
    }
  }

  render() {
    const { questionIndex } = this.state;
    const { questions } = this.props;
    if (questions.length > 0) {
      const currentQuestion = questions[questionIndex];
      return (<div className="multi-question-container">
        <span className="question">{currentQuestion}</span>
        <div className="question-form">
        <input ref="answer" className="answer-field" type="text" maxlength="15"/>
        <button onClick={this._onNextQuestion} className="question-submit" />
        </div>
        <span className="question-count">{`${questionIndex + 1} of ${questions.length}`}</span>
      </div>)
    }

    return null;

  }
}

MultiQuestionInput.defaultProps = {
  questions: []
};