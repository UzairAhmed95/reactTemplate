import React from "react";
import { Modal } from "rsuite";
import Button from "./forms/button";
import { Alert } from "rsuite";

const RsModal = ({
  close,
  show,
  twoButtons,
  buttonTitle,
  modalBody,
  modalTitle,
  handleSubmit,
  isLoading,
}) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        {twoButtons === true ? (
          <>
            <Button
              className="btn btn-danger mt-2 mr-1"
              handleSubmit={close}
              label="Close"
              isLoading={false}
            />
            <Button
              className="btn btn-success mt-2"
              handleSubmit={handleSubmit}
              label={buttonTitle}
              isLoading={isLoading}
              loadingLabel="Creating Draft"
            />
          </>
        ) : (
          <Button
            isLoading={isLoading}
            className="btn btn-danger"
            onClick={close}
            label="Close"
            loadingLabel="Creating Draft"
          ></Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default RsModal;
