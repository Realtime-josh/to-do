import React from 'react';

class Action extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div className='action'>
          <button
          className='action__button' 
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}>What Should I do</button>
        </div>
      )
    };
  };

  export default Action;
