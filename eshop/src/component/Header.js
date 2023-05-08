import React, { useContext } from 'react'
import BoxImage from '../pictures/box1.jpg'
import shoppingCart from '../pictures/shopping.png'
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import StateContext from '../context/StateContext'


const Header = () => {
  const[{basket},dispatch]=useContext(StateContext)
  return (
    <div className='header'>
    <div className='header-logo'>
    <Link to={'/'} style={{textDecoration:'none'}}><h2 className='header-title' >@eSHOP</h2></Link>
    <img src={BoxImage} alt='box-image'/>

    </div>


    <div className='header-search-bar'>
    <input type='search' placeholder='search brand or product with name'/>
    <div className='search-bar'> <FontAwesomeIcon icon={faSearch}/></div>
    
     
    </div>

    <div className='header-navigation-bar'>

    <div className='Nav-item'>
         <FontAwesomeIcon icon={faFlag} className='flag'/>
         <div className='span'><span className='line-one'> Your <br/> Sign In</span></div>
            
          
    </div>
    
    <div className='nav-item'>
      <div className='span'><span>Your &nbsp; SHOP</span></div>

    </div>
    <div className='shopping-details'>
      
       <Link to={'/checkout'}> <img src={shoppingCart} alt='shopping-cart'/></Link>
         <h5>{basket.length}</h5>
      
    </div>
    


    </div>
      
    </div>
  )
}

export default Header
