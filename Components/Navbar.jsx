import React from "react";
import L from '../assets/images/L.jpg'
import './style.css'

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src={L} alt="" />
            <a href="#" className="nav-link1 px-2 menu-color" style={{textDecoration:'none'}}>
                <h2>KITABU EA BOOKS</h2>
              </a>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 menu-color">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 menu-color">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 menu-color">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 menu-color">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 menu-color">
                About
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2 text-success">Login</button>
          <button type="button" className="btn btn-warning text-success">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
