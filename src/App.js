import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import Quiz from './components/Quiz'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      questionId: 1,
      questionCounter: 0,
      questions: ['how many planets does our solar system have', 'what is the capital of australia', 'what is the capital of america'],
      answers: [ ['test1', 'test2', 'test3'], ['test1', 'test2', 'test3'], ['test1', 'test2', 'test3']],
      answerKey: ['test1', 'test2', 'test3'],
      answerUser: [],
      answersCount: {},
      result: '',
      quizStart: false,
      quizComplete: false,
    }
}

  startQuiz = () => {
    this.setState({
      quizStart: true,
    })
  }

  userResults = () => {

    let count = 0;

    console.log('user resaults')
    console.log(this.state.answerUser)
    console.log(this.state.answerKey)

    for(let i = 0; i < this.state.answerKey.length; i++) {
      console.log('how many times')
      console.log(this.state.answerKey[i])
      console.log(this.state.answerUser[i])
      if (this.state.answerKey[i] === this.state.answerUser[i]) {
        count = count + 1
      }
    }

    this.setState({
      score: count
    })

  }

  nextQuestion = (answer) => {
    console.log('we shouldnt be trigged')
    this.setState({
      questionCounter: this.state.questionCounter + 1,
      answerUser: [...this.state.answerUser, answer]
    })

    if (this.state.questionCounter === 2) {
      this.setState({
        quizComplete: true,
      })

      this.userResults()

    }
  }



  render() {
    console.log(this.state.questionCounter)
    console.log(this.state.answerUser)
    console.log('testtestststststst ')

    // if (this.state.quizComplete === true) {
    //   this.userResults()
    // }
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2> Welcome to React Quiz</h2>
          </div>
          {
            this.state.quizStart === true ? (
                <Quiz
                    questions={this.state.questions}
                   answers={this.state.answers}
                    questionCounter={this.state.questionCounter}
                    nextQuestion={this.nextQuestion}
                    quizComplete={this.state.quizComplete}
                    score={this.state.score}
                    userResults={this.userResults}
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
