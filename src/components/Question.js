import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    const { question } = this.props
    return (
        <h2 className="question">{question}</h2>
    )
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question