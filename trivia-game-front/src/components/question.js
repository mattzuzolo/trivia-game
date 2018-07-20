import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }

  render(){
    console.log("quizData",this.props.quizData)

    return(
      <div>
        <p>{this.props.quizData.results}</p>
      </div>
    );
  }

}

export default Question;
