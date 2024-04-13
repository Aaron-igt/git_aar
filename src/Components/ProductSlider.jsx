import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import book from '../assets/images/book.jpeg';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import book5 from '../assets/images/book5.jpeg';
import book6 from '../assets/images/book6.jpeg';
import SProduct from './SProduct';


const ProductSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll:  1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider py-5'>
        <h1 className='text-center display-4 mt-4 fw-bold text-light'>
          Reading is Healthy for the Brain.
          <br />It enables you to acquire more knowledge
        </h1>
        <div className='container mt-5'>
          <Slider {...settings}>
              <div className='p-1'>
                  <SProduct 
                      image = {book}
                      Description="This is a really good book from East africa"
                  />    
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book1}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book2}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book3}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book4}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book5}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'>
              <SProduct 
                      image = {book6}
                      Description="This is a really good book from East africa"
                  />
              </div>
              <div className='p-1'></div>
          </Slider> 
        </div>
    </div>
  )
}

export default ProductSlider