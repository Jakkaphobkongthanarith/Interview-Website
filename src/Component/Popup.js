import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Popup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Title </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && (
          <>
          <img className="d-block mx-auto my-4 img-fluid" src="https://picsum.photos/400/300" />
            <p> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis possimus, quos corporis ex earum nemo aut provident
            blanditiis repellat qui ab numquam nobis, libero a. Facere at
            provident magnam, molestias laboriosam numquam commodi autem optio
            nemo iste quis eum fuga dicta. Recusandae accusantium architecto
            aliquid, voluptates a obcaecati voluptas blanditiis?
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer> 
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
