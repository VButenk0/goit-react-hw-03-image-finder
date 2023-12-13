import React, { Component } from 'react';
import { ModalWrapper, ModalContent } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);

    document.body.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'visible';
    // document.body.style.overflowX = 'hidden';

    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <ModalWrapper onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={largeImageURL} alt={tags} />
        </ModalContent>
      </ModalWrapper>
    );
  }
}

export default Modal;
