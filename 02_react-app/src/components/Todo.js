import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <>
          <Modal onCancel={closeModalHandler} />
          <Backdrop onCancel={closeModalHandler} />
        </>
      )}
    </div>
  );
};
export default Todo;
