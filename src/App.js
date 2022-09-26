
import './App.css';

// import Logo from '../src/iphone.jpg';
import React from 'react';
// import image from './Component/logo-ionaught.svg';
// import {useState,useEffect} from 'react';
// import About from './Component/About';

import {data} from './Component/Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Ad from './Component/Ad';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';

function App() {


  return(
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  )


}

export default App;
