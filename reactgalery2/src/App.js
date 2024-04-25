import React, { Component } from 'react';
import './App.css';
import Gallery from './Galery'
import { useState } from 'react';
import './galery.css'

function App() {
 
    return (
   <div> 
   
   <h1 className="mainH1" style={{textAlign: 'center'}}>Image Gallery</h1>
    <Gallery />
  
   </div>
    );
  }
 

export default App;
