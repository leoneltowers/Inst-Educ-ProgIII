import React, { useState } from 'react';
import Modal from 'react-modal';

// Configura la aplicación para el elemento raíz del modal
Modal.setAppElement('#root');

function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
      >
        <h2>Ejemplo de Modal</h2>
        <p>Este es un ejemplo de un modal en React.</p>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
}

export default Modal;