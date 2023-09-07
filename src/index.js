import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './header';
import Header1 from './header copy';

import Slider from './slider';
import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header1/>
   <Header/>
   <Slider/>
  <Block1/>
  <Block2/>
  <Block3/>
  <Footer/>
  
  </React.StrictMode>
);


