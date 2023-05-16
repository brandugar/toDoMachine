import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from '../TodoContext';

function CreateTodoButton() {
const {openModal, setOpenModal} = React.useContext(TodoContext);
const abrirModal = () => { 
    setOpenModal(!openModal);
}

  return (
    <button
      className="CreateTodoButton"
      onClick={abrirModal}
    >+</button>
  );
}

export { CreateTodoButton };
