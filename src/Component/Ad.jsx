import React from 'react'
// import logo from './../Component/iphone_13.jpg'



const Ad = ({product,price,color,icon,}) => {
  return (
    <div className='box'>
    <div>
    <img src={icon} alt='' height="130px" width="200px"/>
    <div className='productname'>{product}</div>
    <div className='price'>{price}</div>
    <button className='btn' style={{backgroundColor:color}}>BUY NOW</button>

    </div>
    </div>
  )
}

export default Ad

