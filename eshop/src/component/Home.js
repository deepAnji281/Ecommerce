import React from 'react'
import shopdesc from '../pictures/shopdesc.jpg'
import '../css/Home.css'
import Product from './Product'
import bag from '../pictures/bag.jpg'
import karahi from '../pictures/karahi.jpg'
import slipper from '../pictures/slipper.jpg'
import spoon from '../pictures/spoon.jpg'
import shoes from '../pictures/shoes.webp'
 import cooker from '../pictures/cooker.jpg'
 import sandle from '../pictures/sandle.webp'
 import fan from '../pictures/fan.jpg'
 import fridge from '../pictures/fridge.jpg'
import ac from '../pictures/ac.jpg'
import car from '../pictures/car.jpg'
import dettol from '../pictures/dettol.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
    <div className='home-template'>
        <img src={shopdesc} alt='shop-description'/>

    </div>
    <div className='row'>
        <div className='row-template'>
          <Product Image={bag} title='sky-bag' price='80' ratings='⭐⭐⭐' desc='Skybags is aimed at travelers who like to make a style statement everywhere they go. While the bags offer world class functional features, the brand is committed to help you Move in Style through vibrant and unique designs that add an edge to the travelers personality'/>
          <Product Image={sandle} title='puma' price='40' ratings='⭐⭐⭐⭐' desc='Pumas are large, secretive cats. They are also commonly known as cougars and mountain lions, and are able to reach larger sizes than some other "big" cat individuals. Despite their large size, they are more closely related to smaller feline species than to lions or leopards'/>
          <Product Image={slipper} title='red-bull' price='99' ratings='⭐⭐⭐' desc='Red Bull is a brand of energy drinks created and owned by the Austrian company Red Bull GmbH. With a market share of 43%, it is the most popular energy drink brand as of 2020, and the third most valuable soft drink brand behind Coca-Cola and Pepsi'/>
          <Product Image={spoon} title='metal-steel' price='50' ratings='⭐⭐⭐⭐' desc='  A spoon is a utensil consisting of a shallow bowl (also known as a head), oval or round, at the end of a handle. A type of cutlery (sometimes called flatware in the United States), especially as part of a place setting, it is used primarily for transferring food to the mouth'/>
          <Product Image={karahi} title='non-stick' price='70' ratings='⭐⭐⭐' desc=' Most home cooks find that skillets and sauté pans are the most useful shapes for nonstick cookware, as they can be used to fry or scramble eggs, cook pancakes, or sauté delicate foods like fish. A nonstick saucepan can also be useful for cooking rice or making custards, allowing for easy cleanup'/>
          <Product Image={cooker} title='prestige' price='100' ratings='⭐⭐⭐' desc=' The Prestige pressure cooker is a modern cooking item that is indispensable to every person who cooks. From expert chefs to housewives or bachelors who are still learning to cook, a pressure cooker is a regularly used cooking essential in every kitchen.'/>
          <Product Image={fan} title='bajaj' price='98' ratings='⭐⭐⭐' desc=' Bajaj Fans are built to provide lasting air comfort. With exceptional Super5Tuff™ Technology that comes with 5 critical components – SelfGuard™ Capacitor, FierroShield™ Bearing, DuraCoat™ Copper, SurgeProtekt™ Motor & CorroSafe™ Lacquer which harness the best technology to become ultra-efficient machines'/>
          <Product Image={fridge} title='LG' price='200' ratings='⭐⭐⭐⭐' desc=' LG refrigerators keep food fresh for a longer time because inverter technology does an excellent job of keeping a constant temperature. It is also known as the kingmaker of the kitchen'/>
          <Product Image={ac} title='voltas' price='250' ratings='⭐⭐⭐⭐⭐' desc=' Their ACs are well-known for their energy efficiency, fast cooling, and silent operation. Check out the best Voltas ACs below. Since 1954, Voltas has been providing its customers with high-quality air-conditioners that offer superior cooling performance and energy efficiency'/>
          <Product Image={car} title='hundai' price='9000' ratings='⭐⭐⭐⭐' desc=' Hyundai Motor Co. (HMC), established in 1967, is the auto sales leader in the Korean domestic market and exports vehicles to 190 countries worldwide. Hyundai Motor Co. operates the world  largest integrated automobile manufacturing facility in Ulsan, located on Koreas southeast coast'/>
          <Product Image={dettol} title='dettol' price='9' ratings='⭐⭐⭐' desc=' Dettol Liquid is a effective concentrated antiseptic solution that kills bacteria and provides protection against the germs which can cause infection and illness. It can be used for gentle antiseptic wound cleansing and antiseptic skin cleansing. Dettol Liquid. Contains Chloroxylenol'/>
          <Product Image={shoes} title='red-chief' price='120' ratings='⭐⭐⭐' desc=' Red  Chief, as Johnny Dorset likes to call himself, is the freckle-faced ten-year-old son of Ebenezer Dorset, one of the wealthiest men in Summit, Alabama. Red Chief is an apt nickname because he has bright red hair, and immediately becomes the "chief" over the two petty criminals who kidnap him.'/>
        </div>
    </div>
      
    </div>
  )
}

export default Home

