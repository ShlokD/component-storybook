import React, { Fragment, Component } from 'react';
import classNames from 'classnames';

import './matcher.css';

const Checkbox = ({ name, onChange, checked, isMatch }) => (
  <div className={classNames('checkbox', {'matched': isMatch})}>
    <input onChange={onChange} type="checkbox" id={`${name}`} value={`${name}`} checked={checked} disabled={isMatch}></input>
    <label htmlFor={`${name}`}>{name}</label>
  </div>
);

const equals = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; ++i) {
      if (arr2.indexOf(arr1[i]) === -1) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export class Matcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      matchedIndices: []
    };

    this._onOptionClick = this._onOptionClick.bind(this);
  }


  _onOptionClick(ev) {
    const name = ev.target.value;
    this.setState({
      selected: this.state.selected.concat([name])
    });
  }

  componentDidUpdate(_, prevState) {
    const { selected } = this.state;

    const match = this.props.options.find((option) => {
      return equals(option, selected);
    });

    if (match) {
      this.setState({
        matchedIndices: this.state.matchedIndices.concat([this.props.options.indexOf(match)])
      });
    }

    if (selected.length === 2) {
      this.setState({
        selected: []
      });
    }
  }

  render() {
    const { options } = this.props;
    return (<div className="matcher-container">
      {options.map((option, index) => {
        const isMatch = this.state.matchedIndices.indexOf(index) !== -1;

        return (<Fragment key={`matcher-option-${index}`}>
          <Checkbox name={option[0]} onChange={this._onOptionClick} isMatch={isMatch} checked={this.state.selected.indexOf(option[0]) > -1} />
          <Checkbox name={option[1]} onChange={this._onOptionClick} isMatch={isMatch} checked={this.state.selected.indexOf(option[1]) > -1} />
        </Fragment>);
      })}
    </div>);
  }
}