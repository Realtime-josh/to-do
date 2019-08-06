import React from 'react';
import Modal from 'react-modal';

class OptionModal extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <Modal
      isOpen={!!this.props.selectedOption}
      onRequestClose={this.props.removeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={400}
      className='modal'>
      <p className='modal__option'>Selected Option</p>
        {this.props.selectedOption && <h2>{this.props.selectedOption}</h2>}
      <button className='modal__button' onClick={this.props.removeModal}>Close</button>
      </Modal>
   )
  };
};

export default OptionModal;
