import React from 'react';
import Footer from '../Component/Footer';
import './Page.css'

const SignUp = () => {
  return (
    <div>
    <main className="form-signin w-100 m-auto">
      <form className="text-center">
        <img src="https://www.thdirectory.com/fontend-img/Logo_Thailand_Directory.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="250" loading="lazy" />
        <h1 className="h2 ,mb-3">Please Enter Your information</h1>

        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInputFirstName" placeholder="name@example.com" />
          <label htmlFor="floatingInputFirstName">Firstname</label>
        </div>
        <div className="form-floating mb-1">
          <input type="email" className="form-control" id="floatingInputLastName" placeholder="name@example.com" />
          <label htmlFor="floatingInputLastName">Lastname</label>
        </div>
        <div className="form-floating mb-1">
          <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">E-mail</label>
        </div>
        <div className="form-floating mb-1">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-1">
          <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
        </div>

        <div className="form-check text-start mb-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <a href="index.html" className="btn btn-primary w-100 py-2 ,mb-4" type="submit">Sign in</a>
        <p className="mt-5 ,mb-1 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
    <Footer />
    </div>
  );
}

export default SignUp;
