import { useState } from "react";
import Form from "../Form";
import { Modal } from "../Modal";
import { Button } from "./styles";

export const ChangeBalance = ({ onChange }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>+</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form
          onChange={onChange}
          onCloseFormModal={() => setOpenModal(false)}
        />
      </Modal>
    </>
  );
};
