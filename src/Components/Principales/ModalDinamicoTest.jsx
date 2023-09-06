import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

export const ModalDinamicoTest = ({nameLaunch, Title, Body}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='ModalDinamicoTest'>
      <Button variant="primary" onClick={handleShow}>
        {nameLaunch}
      </Button>

      <Modal className='modal-lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Body}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
