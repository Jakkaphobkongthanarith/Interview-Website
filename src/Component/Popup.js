import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Popup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Jakkaphob Kongthanarith </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && (
          <>
          <img className="d-block mx-auto my-4 img-fluid" src="https://picsum.photos/400/300" />
            <p> 
            I use everything I could find; ChatGPT, Pdf, text, Youtube Video, website such as w3school,
             Template from Bootstrap, asking my friend. <br/>
            This was originally a website I planned to sent to an interviewer but I edit this popup
            part. I hope you don't mind I'm sending a website like this since I'm creating a website
            component then import them to my page to save time, also my database and backend skill is
               bad.
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
