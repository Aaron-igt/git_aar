import React from 'react'
import BProduction from './BProduction'
import read1 from '../assets/images/read1.jpeg'
import read2 from '../assets/images/read2.jpeg'
import read3 from '../assets/images/read3.jpeg'
import ea1 from '../assets/images/ea1.jpeg'
import ea2 from '../assets/images/ea2.jpeg'
import ea3 from '../assets/images/ea3.jpeg'

const Book = () => {
  return (
    <div className="container-fluid px-4 py-5 delivery-process">
      <h2 className='text-center display-4 mt-4 fw-bold'>
        Reading is Healthy for the Brain.
      </h2>
    <div className='container mt-5'>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <BProduction 
          image = {ea1}
          image2 = {read1}
          Title = "Productivity"
          Description = "Reading book helps us very productive and helps one gain lots ofn knowledge."
        />
        <BProduction 
          image = {ea2}
          image2 = {read2}
          Title = "Growth"
          Description = "Reading book enables us to grow mentally."
        />
        <BProduction 
          image = {ea3}
          image2 = {read3}
          Title = "Focus"
          Description = "Reading book teaches to keep focus on what we are doing."
        />
    </div>
  </div>
  </div>
  )
}

export default Book