import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalCbu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Ver Datos Bancarios
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-color" closeButton>
          <Modal.Title className="text-center">Datos Bancarios</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-color text-center">
          Titular: Guillermo Pollano <br /> CBU: 0070089430004179129114 <br />
          CUIT: 20-33090947-2 <br /> Banco Galicia <br /> También dispondremos de un buzón en
          el salón
        </Modal.Body>
        <Modal.Footer className="modal-color">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
