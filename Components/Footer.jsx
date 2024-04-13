import React from "react";
import L from "../assets/images/L.jpg";

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="d-flex flex-column justify-column-center align-items-center pt-3">
        <i className="bi bi-envelop display-3 text-white"></i>
        <h3 className="text-white">Stay Informed about special offers</h3>
        <h5 className="text-white fst-italic mt-2">
          subscribe to our newletter
        </h5>
        <div class="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            class="form-control p-2"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-warning px-4" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="container text-white">
        <footer class="py-5">
          <div class="row">
          <div class="col-2">
            <div className="">
                <img src={L} className='w-75 h-75'alt="" />
            </div>
            </div>

            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3 text-white">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-white">&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#twitter" />
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#instagram" />
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
