import React, { Component } from 'react';
import './multi-question-input.css';

export class MultiQuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsMap: props.questions.map(question => ({ question, answer: "" })),
      questionIndex: 0
    }

    this._onNextQuestion = this._onNextQuestion.bind(this);
  }

  _onNextQuestion() {
    if (this.state.questionIndex < this.state.questionsMap.length - 1) {
      this.setState({
        questionIndex: this.state.questionIndex + 1
      });
    } else {
      console.log(this.state.questionsMap);
    }
  }

  render() {
    const { questionsMap, questionIndex } = this.state;
    if (questionsMap.length > 0) {
      const currentQuestion = questionsMap[questionIndex];
      return (<div className="multi-question-container">
        <span className="question">{currentQuestion.question}</span>
        <div className="question-form">
        <input className="answer-field" type="text" maxlength="15"/>
        <button onClick={this._onNextQuestion} className="question-submit" />
        </div>
        <span className="question-count">{`${questionIndex + 1} of ${questionsMap.length}`}</span>
      </div>)
    }

    return null;

  }
}

MultiQuestionInput.defaultProps = {
  questions: []
};