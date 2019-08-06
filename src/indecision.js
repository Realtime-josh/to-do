class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.removeSingle = this.removeSingle.bind(this);
    this.state = {
      options: []
    };
  };

  componentDidMount(){
    console.log('component did mount')
    const finalState = this.state.options;
    const fromStorage = localStorage.getItem('options');
    const parseData = JSON.parse(fromStorage);
    this.setState((prevState) => {
      return {
        options: parseData
      }; 
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component did update')
    if(prevState.options.length !== this.state.options.length){
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
    }else if(this.state.options.indexOf(option) > -1){
      return 'To-do already exist'
    }else{
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
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
    alert(getTodo);
  };

  removeSingle(option){
    console.log('hdo', option)
    this.setState(prevState =>({options:prevState.options.filter(data => data !== option)}));
  }

  render(){
    const title  = `Indecision App`;
    const subtitle = `Put Your Passion to Work`;
    return(
      <div>
        <Header title={title}  subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} removeAll={this.removeAll} removeSingle={this.removeSingle}/>
        <Option hasOptions={this.state.options.length > 0}/>
        <AddOptions handleAddOption={this.handleAddOption}/>
      </div>
    )
  };
};


class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  };
};

class Action extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <button 
        disabled={!this.props.hasOptions}
        onClick={this.props.handlePick}>What Should I do</button>
      </div>
    )
  };
};

class Options extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <button onClick={this.props.removeAll}>Remove All</button>
        {this.props.options.map((opt) => <p key={opt}>{opt}
        <button onClick={(e) => {
          this.props.removeSingle(opt)
        }}>remove</button></p>)}   
      </div>
    )
  };
};

class Option extends React.Component{
  render(){
    return(
      <div>
        {!this.props.hasOptions && <p>No Todo's found</p>}
      </div>
    )
  };
};

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
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input name='option' type='text'/>
          <input type='submit' value='Add Options'/>
        </form>
      </div>
    )
  };
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
