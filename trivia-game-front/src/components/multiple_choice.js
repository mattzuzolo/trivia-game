import React, { Component } from 'react';

import MultipleChoiceItems from './multiple_choice_items'

class MultipleChoice extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }

  render(){
    return(
      <div>
        <MultipleChoiceItems correctAnswer={this.props.correctAnswer} incorrectAnswers={this.props.incorrectAnswers}/>
      </div>
    )
  }



}

export default MultipleChoice;
