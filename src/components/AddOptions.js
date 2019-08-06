import React from 'react'

class AddOptions extends React.Component{
    handleAddOption(e){
      e.preventDefault();
      let todoValue = e.target.elements.option.value;
      let trimValue = todoValue.trim();
      const error = this.props.handleAddOption(trimValue);
      if(!error){ 
        e.target.elements.option.value = '';
      }
      this.setState(() => {
        return {
          error
        };
      });
    };
      constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined
        };
      };
      render(){
        return(
          <div className='addoptions'>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
              <input 
              placeholder=' Enter Option..'
              className='addoptions__inputfield' name='option' type='text'/>
              <input className='addoptions__button' type='submit' value='Add Options'/>
            </form>
          </div>
        )
      };
    };

export default AddOptions;
