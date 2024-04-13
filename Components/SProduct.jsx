import React from "react";

const SProduct = ({image, Description}) => {
  return (
      <div class="card shadow-sm">
        <img src={image} alt="" style={{height:"100px"}}/>
        <div class="card-body">
          <p>{Description}</p>
        </div>
      </div>
  );
};

export default SProduct;
