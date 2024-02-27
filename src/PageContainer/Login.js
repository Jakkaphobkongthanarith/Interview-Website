import React from 'react';
import Footer from '../Component/Footer';
import './Page.css'

const Login = () => {
  return (
    <div>
      {/* Paste the HTML code here */}
      {/* Make sure to update any relative paths if necessary */}
      <main className="form-signin w-100 m-auto">
        <form id="loginForm" className="text-center">
          <img src="https://www.thdirectory.com/fontend-img/Logo_Thailand_Directory.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="250" loading="lazy" />
          <h1 className="h2 mb-5">Please sign in</h1>
          <div className="form-floating mb-3" bis_skin_checked="1">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3" bis_skin_checked="1">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start mb-3" bis_skin_checked="1">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button id="login-btn" className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign in</button>
          <p className="mt-5 ,mb-1 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
