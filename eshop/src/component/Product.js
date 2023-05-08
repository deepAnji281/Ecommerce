import React, { useContext } from 'react'
import '../css/product.css'
import StateContext from '../context/StateContext';




const Product = (props) =>{
  // pull information to the data layer
  const[state,dispatch]=useContext(StateContext);

  const AddToBasket=()=>{
     
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        Image:props.Image,
        price:props.price,
        title:props.title,
        ratings:props.ratings,
        desc:props.desc,
      },
    });
  }

  
  
  return (
    <div className='product'>
    
    <div className='product-cart'>
    
      <div className="card">
  <img className="card-img-top" src={props.Image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}.</p>
    <div className='price'><small>$:<strong>{props.price}</strong></small></div>
    <div className='ratings'><h4>{props.ratings}</h4></div>
     <button className="btn btn-success " onClick={AddToBasket}>Add to Cart</button>
   
  </div>
</div>
    
   


    </div>

      
    </div>
  )
}

export default Product
