import React from "react";
import HeroImage from '../assets/images/logo.jpg'
import Certificate from '../assets/images/approval.jpg'

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
        <div className="col-10 col-sm-8 col-lg-5">
          <img
            src={HeroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Book in a bulb"
            width="1000"
            height="700"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold lh-1 mb-3">
           <span>East Africa's Finest Online Bookstore</span>
          </h1>
          <div className="d-flex align-items-center my-5">
            <img src={Certificate} alt="" className="me-3"/>
            <p>We have the best books in Local Languages all over East Africa.</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded-0">
              Buy a Book
            </button>
            <button type="button" className="btn btn-white btn-lg px-4 rounded-0">
              Buy All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
