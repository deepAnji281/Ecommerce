import React from 'react'
import '../css/ProductDetails.css'
const ProductDetails = (props) => {
  return (
    <div>
       <div className='product-summary'>
        
        <div className='product-card'>
            <img src={props.Image} alt='product-card-image'/>
        </div>
        <div className='product-history'>

            <div className='title'><h1>{props.title}</h1></div>
            <p className='text'>{props.desc}</p>
            <div className='price'>$:{props.price}</div>
            <div className='ratings'>{props.ratings}</div>

            <button className='btn btn-primary'>remove from basket</button>
        </div>

     </div>
    </div>
  )
}

export default ProductDetails
