import React, { Component } from 'react';
import './App.css';

import Question from './components/question'
import MultipleChoice from './components/multiple_choice'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      quizData: ["quizData placeholder"],
      correctAnswer: "correct placeholder",
      incorrectAnswers: ["incorrect placeholder1",
    "incorrect placeholder2", "incorrect placeholder3"]
      }
  }

  onAnswerSelection = (event) => {
    console.log("button clicked")
    debugger;
    if (this.state.correctAnswer === event.target.innerText){
      debugger;
      alert("Correct!")
    }
    else {
      alert("Incorrect!")
    }

  }


  render() {
    console.log("quizdata", this.state.quizData)
    return (
      <div className="App">
        Matt's Quiz Game:
        <Question quizData={this.state.quizData}/>
        <MultipleChoice
          correctAnswer={this.state.correctAnswer}
          incorrectAnswers={this.state.incorrectAnswers}
          onAnswerSelection={this.onAnswerSelection}
          />
      </div>
    );
  }

  componentDidMount(){
    let url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"

    fetch(url)
      .then(response => response.json())
      .then(apiData => this.setState({
        quizData: apiData.results[0],
        correctAnswer: apiData.results[0].correct_answer,
        incorrectAnswers: apiData.results[0].incorrect_answers
      }))
  }
}



export default App;
