import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './Popup';

const Card = () => {
    const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

    return (
        <div>
            {/* {isPopupVisible && <Popup setIsPopupVisible={setIsPopupVisible} />} */}
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3">
            <div className="col">
                <div className="card mb-sm-1rem-noeffect-wtf**"  >
                    <img
                        src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
                        className="card-img-top cropped-img btn btn-lg px-2 me-md-2"
                        style={{ height: '300px' }}
                        onClick={handleShowPopup}/>
                    <div className="card-body">
                        <h3 style={{ cursor: 'pointer' }} onClick={handleShowPopup} > Smart cat, is it possible?</h3>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque,
                            quos alias corporis blanditiis earum ad sequi excepturi asperiores voluptates cumque
                            voluptate, harum, deserunt amet.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card" >
                    <img src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                        className="card-img-top cropped-img btn btn-lg px-2 me-md-2"
                        style={{ height: '300px' }}
                        onClick={handleShowPopup}/>
                    <div className="card-body">
                        <h3 style={{ cursor: 'pointer' }} onClick={handleShowPopup} > Cute and Funny</h3>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque,
                            quos alias corporis blanditiis earum ad sequi excepturi asperiores voluptates cumque
                            voluptate, harum, deserunt amet.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card" >
                    <img src="https://www.forbes.com/advisor/wp-content/uploads/2023/09/getty_creative.jpeg-900x510.jpg"
                        className="card-img-top cropped-img btn btn-lg px-2 me-md-2"
                        style={{ height: '300px' }}
                        onClick={handleShowPopup}/>
                    <div className="card-body">
                        <h3 style={{ cursor: 'pointer' }} onClick={handleShowPopup} > Kittens, why not?</h3>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque,
                            quos alias corporis blanditiis earum ad sequi excepturi asperiores voluptates cumque
                            voluptate, harum, deserunt amet.</p>
                    </div>
                </div>
            </div>

        
            <div class="col mb-3">
                <div class="card">
                    <img src="https://thumbs.dreamstime.com/b/symbol-question-silhouette-cat-black-background-portrait-dark-isolated-90354099.jpg"
                    class="card-img-top cropped-img btn btn-lg px-2 me-md-2"
                    style={{ height: '300px' }}
                    onClick={handleShowPopup}/>
                    <div class="card-body">
                        <h3 style={{ cursor: 'pointer' }} onClick={handleShowPopup} > Specific cat? We got you covered!</h3>
                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eaque, quos alias corporis blanditiis earum ad sequi excepturi asperiores voluptates cumque voluptate, harum, deserunt amet.</p>
                    </div>
                </div>
            </div>
            <Popup show={showPopup} handleClose={handleClosePopup} />
        </div>
    </div>
    </div>
    )
}

export default Card;