import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="container py-3 my-4 border-top">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img
            src="https://lh3.googleusercontent.com/pCg97Xu5YHyhHQAE9V4srONl3ghx3py_tS_QfvqqzxjBqLhTQOAbcixBAo7LEkkcv3STAA=s100"
            alt="Bootstrap Themes"
            loading="lazy"
            style={{ width: '80px', height: 'auto' }}
          />
          <span className="text-body-secondary ms-2">© HUNZA Co., Ltd. Tel. : 0-2995-3100-1, 08 6310 5911 Fax : 0-2995-3102</span>
        </div>

        <div className="d-flex align-items-center">
          <a className="text-body-secondary me-3" href="https://www.instagram.com/thailanddirectory/?igshid=10jk9goj7f45d">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram logo" width="40" height="40" />
          </a>

          <a className="text-body-secondary me-3" href="https://www.facebook.com/ThailandDirectory/">
            <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="Facebook logo" width="40" height="40" />
          </a>

          <a className="text-body-secondary" href="https://www.youtube.com/channel/UC8aIKMUGB9A2V9Xm0ZFMdvA">
            <img src="https://image.similarpng.com/very-thumbnail/2020/07/Youtube-logo-vector-PNG.png" alt="Youtube logo" width="40" height="40" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
