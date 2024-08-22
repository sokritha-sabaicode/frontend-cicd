"use client"
import React from "react";

const ProductId = ({ params }:{params:{productId:number}}) => {
   
    
  return (
    <div>
      productId: {params.productId}
    </div>
  );
};

export default ProductId;
