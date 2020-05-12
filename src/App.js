import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      questionId: 1,
      questionCounter: 0,
      questions: ['how many planets does our solar system have', 'what is the capital of australia', 'what is the capital of america'],
      answers: [ ['8', '7', '9'], ['Brisbane', 'Canberra', 'Sydney'], ['Los Angeles', 'New York', 'Washington']],
      answerKey: ['8', 'Canberra', 'Washington'],
      answerUser: [],
      quizStart: false,
      quizComplete: false,
    }
  }

  startQuiz = () => {
    this.setState({
      quizStart: true,
    })
  }

  userResults = (results) => {

    let count = 0;

    const { answerKey } = this.state

    for(let i = 0; i < answerKey.length; i++) {
      if (answerKey[i] === results[i]) {
        count = count + 1
      }
    }

    this.setState({
      score: count
    })
  }

  nextQuestion = (answer) => {
    const { questionCounter, answerUser} = this.state

    this.setState((state) => ({
      questionCounter: state.questionCounter + 1,
      answerUser: [...state.answerUser, answer]
    }))

    if (questionCounter === 2) {
      this.setState({
        quizComplete: true,
      })
      const results = [...answerUser, answer]
      this.userResults(results)
    }
  }

  render() {
    const {
      questions,
      answers,
      questionCounter,
      quizComplete,
      score,
      quizStart
    } = this.state

    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2> Welcome to React Quiz</h2>
          </div>
          {
            quizStart ? (
                <Quiz
                    questions={questions}
                    answers={answers}
                    questionCounter={questionCounter}
                    nextQuestion={this.nextQuestion}
                    quizComplete={quizComplete}
                    score={score}
                />
            ) : (
                <button onClick={this.startQuiz}>Click here to start</button>
            )
          }
        </div>
    );
  }
}

export default App;
