import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from "./Question";
import Answers from "./Answers";

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false,
      checkedResult: '',
    }
  }

  onChanged = (e) => {
    this.setState({
      checkedResult: e.currentTarget.value,
      isChecked: true,
    })
  }

  render() {
    const { checkedResult, isChecked } = this.state
    const {
      nextQuestion,
      score,
      quizComplete,
      questions,
      questionCounter,
      answers
    } = this.props
    return (
        <>
          {
            !quizComplete ? (
                <>
                  <Question question={questions[questionCounter]}/>
                  <ul>
                    {
                      answers[questionCounter].map( (answer) => (
                          <Answers
                              answer={answer}
                              onChanged={this.onChanged}
                              checkedResult={checkedResult}
                          />
                        )
                      )}
                  </ul>
                  {
                    isChecked && (
                        <button
                            type="submit"
                            onClick={ () => { nextQuestion(checkedResult)}}
                        >
                          Submit this answer
                        </button>
                    )
                  }
                  </>
            ) : (
                <>
                  <h1>completed</h1>
                  <p> your final score is {score}/3</p>
                </>
            )
          }
        </>
    )
  }
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  questionCounter: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  quizComplete: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};

export default Quiz