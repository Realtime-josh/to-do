import React from 'react';
import AddOptions from './AddOptions';
import Option from './Option';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
  constructor(props){
    super(props); 
    this.handleAddOption = this.handleAddOption.bind(this)
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.removeSingle = this.removeSingle.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined,
      keyProp:0,
    };
  };
  
    componentDidMount(){
      const fromStorage = localStorage.getItem('options');
      const parseData = JSON.parse(fromStorage);
      if(parseData){
        console.log(parseData)
        this.setState((prevState) => {
          return {
            options: this.state.options.concat(parseData)
          }; 
        })
      }
    }

    componentDidUpdate(prevProps, prevState){
      console.log('component did update')
      if(prevState.options.length !== this.state.options.length && this.state.options.indexOf(null) > -1 === false){
        const initState = this.state.options;
        const json = JSON.stringify(initState);
        localStorage.setItem('options', json);
      }
    }
  
    componentWillUnmount(){
      console.log('component will unmount')
    }
  
    handleAddOption(option){
      if(!option){
        return 'Add a valid input'
      }else if(this.state.options && this.state.options.indexOf(option) > -1){
        return 'To-do already exist'
      }else{
        this.setState((prevState) => {
          return {
            options:prevState.options.concat([option])
          }
        })
      };
    };
  
    removeAll(){
      this.setState(() => ({options:[]}));
    }
  
    handlePick(){
      const number = Math.floor(Math.random() * this.state.options.length);
      const getTodo = this.state.options[number];
      this.setState((prevState) => ({selectedOption: getTodo}))
    };
  
    removeSingle(option){
      console.log('hdo', option)
      this.setState(prevState =>({options:prevState.options.filter(data => data !== option)}));
    }

    removeModal(){
      this.setState(() => ({selectedOption:undefined}));
    }
  
    render(){
      const title  = `Indecision App`;
      const subtitle = `Put Your Passion to Work.`;
      return(
        <div>
          <Header title={title}  subtitle={subtitle}/>
          <Action hasOptions={this.state.options && this.state.options.length > 0} handlePick={this.handlePick}/>
          <Options options={this.state.options && this.state.options} 
          removeAll={this.removeAll} 
          removeSingle={this.removeSingle}
          hasOptions={this.state.options && this.state.options.length > 0}/>
          {/* <Option hasOptions={this.state.options && this.state.options.length > 0}/> */}
          <AddOptions handleAddOption={this.handleAddOption}/>
          <OptionModal selectedOption={this.state.selectedOption} removeModal={this.removeModal}/>
        </div>
      )
    };
  };

export default IndecisionApp;
