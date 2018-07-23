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
        Select the correct answer:
        <MultipleChoiceItems
          correctAnswer={this.props.correctAnswer}
          incorrectAnswers={this.props.incorrectAnswers}
          onAnswerSelection={this.props.onAnswerSelection}/>
      </div>
    )
  }



}

export default MultipleChoice;
