import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Modal = () => {
  const { modalShown, hideModal } = useGlobalContext()

  return (
    <div className={`${modalShown ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={hideModal} >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
