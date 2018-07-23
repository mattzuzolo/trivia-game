import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }




  render(){
    return(
      <div>
        Question:
        {this.props.quizData.question}
      </div>
    );
  }

}

export default Question;
