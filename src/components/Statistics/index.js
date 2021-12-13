import { useState } from "react";
import { Modal } from "../Modal";

const Statistics = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h1>Statistic Page</h1>
      <button onClick={() => setOpenModal(true)}>Open</button>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div>I'm in a portal</div>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Statistics;
