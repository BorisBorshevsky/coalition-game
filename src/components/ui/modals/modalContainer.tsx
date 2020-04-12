import React, { useState } from "react";
import { Modal } from "@material-ui/core";

interface modalContainerProps {
  open: boolean
  hideModal: () => void
  modalType: string
  modalProps: any
}

export const ModalContainer = (props: modalContainerProps) => {
  const [state, setState] = useState({ modalIsOpen: props.open })

  const closeModal = () => {
    props.hideModal()
  };

  if (!props.modalType) {
    return null
  }
  const SpecifiedModal = () => <div></div>
  return (
    <Modal
      open={state.modalIsOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <SpecifiedModal
        closeModal={closeModal}
        {...props.modalProps}
      />
    </Modal>
  )
}