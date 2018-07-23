import React, { Component } from 'react';
import UUID from 'uuid';

class MultipleChoiceItems extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }

  render(){
    return(
      <ul>
        {this.props.incorrectAnswers.map(i => <li key={UUID()}>{i}</li>)}
        <li>{this.props.correctAnswer}</li>
      </ul>
    );
  }

}

export default MultipleChoiceItems;
