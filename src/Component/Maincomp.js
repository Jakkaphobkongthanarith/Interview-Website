import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './Popup';

const Maincomp = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="container col-lg-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-5">
          {/* Image that triggers the Popup */}
          <img
            src="https://www.purina.co.uk/sites/default/files/2023-03/Hero%20Pedigree%20Cats.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            max-width="700"
            height="500"
            loading="lazy"
            onClick={handleShowPopup}
            style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Cute kittens are waiting for you
          </h1>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis possimus, quos corporis ex earum nemo aut provident
            blanditiis repellat qui ab numquam nobis, libero a. Facere at
            provident magnam, molestias laboriosam numquam commodi autem optio
            nemo iste quis eum fuga dicta. Recusandae accusantium architecto
            aliquid, voluptates a obcaecati voluptas blanditiis?
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* Button that triggers the Popup */}
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={handleShowPopup}
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Popup component */}
      <Popup show={showPopup} handleClose={handleClosePopup} />
    </div>
  );
}

export default Maincomp;
