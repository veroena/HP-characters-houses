import React from 'react';

class Modal extends React.Component {

  // componentDidMount() {
  //   document.body.style.overflow = 'hidden';
  // }

  // componentWillUnmount() {
  //   document.body.style.overflow = 'unset';
  // }

  render() {
    const { closeModal, sortingHouse } = this.props;
    return (
      <div className="container__modal">
        <div className="modal">
          <div className="modal__content">
            <i className="fas fa-times-circle" onClick={closeModal}></i>
            <p className="modal__paragraph">You belong in house</p>
            <h3 className="modal__house">{sortingHouse}</h3>
            <h4 className="modal__congrats">Congratulations!</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;