import React, { useState } from 'react';
import Header from '../Component/Header';
import Maincomp from '../Component/Maincomp';
import Card from '../Component/CardArea';
import Footer from '../Component/Footer';
import Popup from '../Component/Popup';


const FirstPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Maincomp />
      <Card />
      <Footer />
      <Popup />
      {/* {isPopupVisible && <Popup />} */}
    </div>
  );
}

export default FirstPage;
