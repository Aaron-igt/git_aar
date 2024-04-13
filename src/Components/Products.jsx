import React from 'react'
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import Product from './Product';


const Products = () => {
  return (
    <div className='container py-5'>
        <div className='d-flex justify-content-between'>
            <h3 className='text-success'>Best Books</h3>
            <button className='btn btn-transparent fw-bold px-3 rounded-0 border border-success'></button>
        </div>
        <div className='row mt-5'>
        <Product
            image = {book1} 
            Name = "East African Folktales"
            Price = "35000"
            Color = "p1color"
        />
        <Product
            image = {book2} 
            Name = "The Tales Of East Africa"
            Price = "50000"
            Color = "p2color"
        />
        <Product
            image = {book3} 
            Name = "The First Wife: tale of polygamy"
            Price = "45000"
            Color = "p3color"
        />
        <div className='col-12 col-md-8'>
            <div className='p-1'>
                <div className='border shadow=sm d-flex p4color'>
                    <div className='text-center px-0 px-lg-5'>
                        <img src={book4} alt="" className='pImage'/>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h3>An African Popular Literature</h3>
                        <p>shs.50000</p>
                        <button className='btn bg-white w-100 rounded-0'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-4'>
        <div className='p-1'>
            <div className='border shadow-sm py-4 px-3 p5color'>
            <h3>Chinua Achebe</h3>
            <p>shs.70000</p>
            <button className='btn bg-white w-100 rounded-0'>Add to Cart</button>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Products