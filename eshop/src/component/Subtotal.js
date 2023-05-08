import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../css/subtotal.css'
const Subtotal = () => {
  return (
    <div className='subtotal'>
    <CurrencyFormat
      renderText={(value)=>(
        <>
            <p>Subtotal(0 items):<strong>$0</strong></p>
            <p className='subtotal-gifts'>
            <input type='checkbox'/>your gift is here</p><br/>
        </>
        
      )}
     decimalScale={2}
     value={0}
     displayType='text'
     thousandSeparator={true}

     />
      <button className='btn btn-warning'>proceed to pay</button>
    </div>
  )
}

export default Subtotal
