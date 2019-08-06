import React from 'react';
import Option from './Option'

class Options extends React.Component{
    constructor(props){
      super(props);
    };
    render(){
      return(
        <div className='options'>
          <button className='remove__button' onClick={this.props.removeAll}>Remove All</button>
          {this.props.options.map((opt) => <div  className='options__list'>
            <table  className='options__table'>
              <tbody >
                <tr  className='options_table_row options__row'>
                  <td  className='options_table_data'>
                    <p key={opt}>{opt}</p>
                  </td>
                  <td  className='options__remove options__row'>
                    <button className='options__remove-single' onClick={(e) => {
                    this.props.removeSingle(opt)
                    }}>remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>)}
          <Option hasOptions={this.props.hasOptions}/>
        </div>
      )
    };
  };

  export default Options;
