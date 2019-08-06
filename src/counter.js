class Counter extends React.Component{
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  };

  increment(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  decrement(){
    if(this.state.count > 0){
      this.setState(prevState => ({count:prevState.count - 1}));
    };
  };

  reset(){
    this.setState(() => ({count: 0}))
  };

  componentDidMount(){
    console.log('Component did mount')
    const getStorage = localStorage.getItem('count');
    const parseStorage = JSON.parse(getStorage);
    this.setState(() =>{
      return {
        count: parseStorage
      };
    });
  };

  componentDidUpdate(prevProps, prevState){
    console.log('Component did Update')
    const initState = this.state.count;
    const stringifyState = JSON.stringify(initState);
    localStorage.setItem('count', stringifyState);
  };

  componentWillUnmount(){
    console.log('Component will unmount')
  };

  render(){
    return(
      <div>
        <h1>Counter App</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment Count</button>
        <button onClick={this.decrement}>Decrement Count</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  };
};

ReactDOM.render(<Counter />, document.getElementById('app'));
