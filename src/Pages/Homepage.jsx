// import './App.css';
import React from 'react';
// import Logo from '../src/iphone.jpg';

import image from '../Component/logo-ionaught.svg';
import {useState,} from 'react';
import About from '../Component/About';
import Home from '../Component/Home';
import {data} from '../Component/Data';


function Homepage() {

const [first, setfirst] = useState('home')
const [element, setElement] = useState(data)

  return (
    <div>
      
      <header>
        <div>
          <img src={image} alt="" height={45} width={150}  ></img>
        </div>
        <div className='label'>
        <div onClick={()=>setfirst("home")}>Home</div>
        <div onClick={()=>setfirst("shop")}>Shop</div>
        <div onClick={()=>setfirst("about")}>About</div>
        <div onClick={()=>setfirst("contact")}>Contact</div>
        <div onClick={()=>setfirst("login")}>Login</div>
        </div>

      </header>

      { first==='home'?(<Home data= {element}/>):first==='about'?(<About/>):''}


        
      

      {/* <button onClick={()=>setCount(count+1)}>Add</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count-1)}>Subtract</button> */}

      <footer><div className='footer'> Terms and Condition</div></footer>
    </div>
  );

  


}

export default Homepage;
