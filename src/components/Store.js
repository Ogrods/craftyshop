import React, { Component } from 'react';
import Hero from "../images/hero-bg-transparent.png"
import { css } from "./Store.css"


export default () => {
  return (
    <div 
      className="main" 
      style={{ backgroundImage:`url(${Hero})`}}>
      
      Hello World
      
    </div>
  );
};