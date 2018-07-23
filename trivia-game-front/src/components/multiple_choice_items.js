import React, { Component } from 'react';
import UUID from 'uuid';

class MultipleChoiceItems extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }

  render(){
    return(
      <div>
        {this.props.incorrectAnswers.map(i => <button key={UUID()}>{i}</button>)}
        <button>{this.props.correctAnswer}</button>
      </div>
    );
  }

}

export default MultipleChoiceItems;
