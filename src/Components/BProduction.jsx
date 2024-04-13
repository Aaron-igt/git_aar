import React from 'react'

const BProduction = ({image, image2, Title, Description}) => {
  return (
    <div class="col">
    <div class="card shadow-sm">
      <img src={image} alt="" />
      <div class="card-body d-flex">
            <img src={image2} alt="" className='w-25 h-25'/>
            <p>
              <strong>{Title}</strong>
              <p>{Description}</p>
            </p>
        </div>
      </div>
    </div>
  )
}

export default BProduction