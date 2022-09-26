import React from 'react'
// import logo from './iphone_13.jpg';
// import logo1 from './s22ultra.jpg';
// import logo2 from './nothing.jpg'
import Ad from './Ad';



const Home = ({data}) => {
  return (
    <div>
        
        <main>
        
      {data.map((data,index)=>{
        return(

        <Ad key={index} icon={data.icon} product={data.product}  price={data.price} color='#0000ff' />


      )}
      )}

        
      </main>



    </div>
  )
}

export default Home