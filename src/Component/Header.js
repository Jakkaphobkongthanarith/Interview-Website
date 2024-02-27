import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-lg-flex flex-wrap">
          <a href="/" className="align-items-center mb-2 mb-lg-0"> {/* Removed text-center class */}
            <img
              src="https://www.thdirectory.com/fontend-img/Logo_Thailand_Directory.jpg"
              className="d-block mx-auto mx-lg-0 img-fluid"
              alt="Bootstrap Themes"
              width="200"
              height="200"
              loading="lazy"
            />
          </a>

          <div className="mx-4"></div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
            <Link to="/news" className="nav-link px-2 text-white">News</Link>

          </ul>

          <div className="text-center justify-content-center">
            <a href="login" className="btn btn-outline-light me-2">Login</a>
            <a href="signup" className="btn btn-outline-light me-2">Signup</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
