import React from 'react'
import book1 from '../assets/images/book1.jpg'
import book2 from '../assets/images/book2.jpg'
import book3 from '../assets/images/book3.jpg'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
        <h2 className='text-center display-3 mt-5 fw-bold'>How Delivery works?</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="bg-gradient">
          <img src={book1} className='w-50 h-50' alt="" />
        </div>
        <h2>Pick your Book</h2>
        <p>Get and Pick any book of your choice about East African local languages.</p>
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
          <img src={book2} className='w-50 h-50' alt="" />
        </div>
        <h2>Order and We Deliver your Book</h2>
        <p>You order a book of your choice and help you with delivery to your door.</p>
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
          <img src={book3} className='w-50 h-50' alt="" />
        </div>
        <h2>Enjoy Reading your Book</h2>
        <p>Enjoy reading your book after delivery.</p>
      </div>
    </div>
  </div>
  )
}

export default Delivery