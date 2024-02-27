import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Popup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && ( // Conditionally render the content based on the 'show' prop
          <>
          <img className="d-block mx-auto my-4 img-fluid" src="https://picsum.photos/400/300" />
            <p> 
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quos, harum dolorum. Voluptate libero, maxime voluptatibus molestias minus
                tenetur adipisci tempora commodi illo iure dolorem modi molestiae officia quaerat. Quibusdam
                quasi totam debitis culpa cupiditate odio quas consectetur ipsa blanditiis fugit ipsum ad non
                aliquid atque maiores eaque odit sequi quaerat velit eveniet modi consequuntur, laborum nemo?
                Pariatur eius harum debitis, dolores, minus suscipit ipsa rem veritatis dicta recusandae quos ex
                aliquid illo voluptas eaque! Et nam ratione, fugit debitis, asperiores quia magnam repellat
                possimus consectetur, repudiandae dolorum distinctio doloremque aliquid! Adipisci quasi sint a
                accusamus vel labore veniam distinctio id.Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quos, harum dolorum. Voluptate libero, maxime voluptatibus molestias minus
                tenetur adipisci tempora commodi illo iure dolorem modi molestiae officia quaerat. Quibusdam
                quasi totam debitis culpa cupiditate odio quas consectetur ipsa blanditiis fugit ipsum ad non
                aliquid atque maiores eaque odit sequi quaerat velit eveniet modi consequuntur, laborum nemo?
                Pariatur eius harum debitis, dolores, minus suscipit ipsa rem veritatis dicta recusandae quos ex
                aliquid illo voluptas eaque! Et nam ratione, fugit debitis, asperiores quia magnam repellat
                possimus consectetur, repudiandae dolorum distinctio doloremque aliquid! Adipisci quasi sint a
                accusamus vel labore veniam distinctio id.
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
