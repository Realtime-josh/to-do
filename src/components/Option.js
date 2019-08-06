import React from 'react'

class Option extends React.Component{
    render(){
      return(
        <div>
          {!this.props.hasOptions && <p>No Todo's found</p>}
        </div>
      )
    };
  };

export default Option;
