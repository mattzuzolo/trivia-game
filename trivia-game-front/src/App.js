import React, { Component } from 'react';
import './App.css';

import Question from './components/question'
import MultipleChoice from './components/multiple_choice'

class App extends Component {
  constructor(props){
    super(props)

    this.state = { quizData: "placeholder" }
  }

  componentDidMount(){
    let url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"

    fetch(url)
      .then(response => response.json())
      .then(apiData => this.setState({quizData: apiData}))
  }



  render() {
    return (
      <div className="App">
        App content here
        <Question quizData={this.state.quizData}/>
        <MultipleChoice />
      </div>
    );
  }
}



export default App;
