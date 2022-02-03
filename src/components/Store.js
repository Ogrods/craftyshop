import React, { Component } from 'react';
import Hero from "../images/hero-bg-transparent.png"
import { css } from "./Store.css"
import Card from "./Card.js"
import Grid from "./Grid.js"

export default () => {
  return (
    <div 
      className="main" 
      style={{ backgroundImage:`url(${Hero})`
      }}>
      
      <br />
      <Grid />

      
    </div>
  );
};