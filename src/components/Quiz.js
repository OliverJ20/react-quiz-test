import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from "./Question";

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false,
      checkedResult: '',
    }

    if( this.props.quizComplete === true) {
      this.props.userResults()
    }
  }


  onChanged = (e) => {
    console.log('whats up')
    this.setState({
      checkedResult: e.currentTarget.value,
      isChecked: true,
    })
  }

  onSubmit = (result) => {
    console.log('no trigger')
    this.props.nextQuestion(result)
  }

  // onChecked = (question) => {
  //   console.log('how often is this called')
  //   this.setState({
  //     checkedResult: question,
  //     isChecked: true,
  //   })
  // }

  render() {
    return (
        <>
          {
            this.props.quizComplete === false ? (
                <>
                <Question content={this.props.questions[this.props.questionCounter]}/>
                <ul>
                {this.props.answers[this.props.questionCounter].map( (question) => (
                          <div>
                            <li>
                              <input
                                  type="radio"
                                  checked={this.state.checkedResult === question}
                                  onChange={this.onChanged}

                                  value={question}
                              />
                              <label>{question}</label>
                            </li>
                          </div>
                      )


                  )}
            </ul>
            {
            this.state.isChecked === true && (
            <button type="submit" onClick={ () => { this.props.nextQuestion(this.state.checkedResult)}}> Submit this answer {this.state.checkedResult} </button>
            )
            }
            </>
            ) : (
                <>
                <h1>completed</h1>
                  <p> your final score is {this.props.score}/3</p>
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
  userResults: PropTypes.func.isRequired,
};

export default Quiz