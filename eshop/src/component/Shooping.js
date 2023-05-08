import React from 'react'
import adv from '../pictures/adv.jpg'
import '../css/shooping.css'
import Subtotal from './Subtotal'
import ProductDetails from './ProductDetails'
import StateContext from '../context/StateContext'
import { useContext } from 'react'
const Shooping =()=>{
  const[{basket},dispatch]=useContext(StateContext)
return(
    <div className='shopping-details'>
       <div className='checkout'>
    <div className='checkout-left'>
    <img src={adv} alt='checkout-left'/>

    </div>
    

    
    <div className='chekputright'>
      <Subtotal/>

    </div>
    </div>
      <h2 style={{textAlign:'center', fontStyle:'italic'}}>Your Shopping Box Is Here</h2>
      {
        basket.map((item)=>{
          return <>
            <ProductDetails Image={item.Image} title={item.title} price={item.price} desc={item.desc} ratings={item.ratings}/>
          </>
        })
      }
    
    </div>
   

);
}
export default Shooping;