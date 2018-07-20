import React, { Component } from 'react';

class MultipleChoiceItems extends Component {
  constructor(props){
    super(props)

    this.state = { key: "value" }
  }

  render(){
    return(
      <div>
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
        <li>Answer 4</li>
      </div>
    );
  }


}

export default MultipleChoiceItems;
