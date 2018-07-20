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
        <ul>
        <MultipleChoiceItems />
        </ul>
      </div>
    )
  }



}

export default MultipleChoice;
