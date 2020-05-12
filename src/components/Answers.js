import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answers extends Component {
  render() {
    const { answer, checkedResult, onChanged } = this.props
    return (
        <div>
          <li>
            <input
                type="radio"
                checked={checkedResult === answer}
                onChange={onChanged}
                value={answer}
            />
            <label>{answer}</label>
          </li>
        </div>
    )
  }
}

Answers.propTypes = {
  answer: PropTypes.string.isRequired,
  checkedResult: PropTypes.string.isRequired,
  onChanged: PropTypes.func.isRequired,
};

export default Answers