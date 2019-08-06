import React from 'react';

class Header extends React.Component{
    render(){
      return(
        <div className='header'>
          <hgroup>
            <h1 className='header__title'>{this.props.title}</h1>
            <h3 className='header__subtitle'>{this.props.subtitle}</h3>
          </hgroup>
        </div>
      )
    };
  };

export default Header;
