import React, { Component } from 'react';
import './homePage.css'
import BackgroundImage from "react-background-image";
import hdImage from "./images/home.jpg";
import da from './images/da.jpeg'

class homePage extends Component {
  render() {
    return (
      <div>
        <BackgroundImage
          src={hdImage}
          className="myCustomClass"
        >
          <div className='text-center back'>
            <p className='main-text'>Music</p>          
            <p className='sub-text'>We bring together your favourite music services and join up listening, 
            watching and sharing to connect your musical world.Below you can visualise, in real-time, the listening 
            habits and trends of My Music global community. Go Explore.</p>
          </div>
        </BackgroundImage>
        <h1 className='text-center'>Artists</h1>
        <div className="conatiner-fluid d-flex justify-content-center">
      
         <div className="row">
           <div className='col-md-4'>
          <div className='card text-center'>
          <div className='col-md-4 overflow'>
<img src={da} alt='img1' />
</div>
<div className='card-body text-dark'>
<h4 className='card-title'>card title</h4>
<p className='card-text text-secondary'>ghguyyuyuuyuy</p>
</div>
</div>
          </div>
          <div className='col-md-4'>
          <div className='card text-center'>
          <div className='col-md-4 overflow'>
<img src={da} alt='img1' />
</div>
<div className='card-body text-dark'>
<h4 className='card-title'>card title</h4>
<p className='card-text text-secondary'>ghguyyuyuuyuy</p>
</div>
</div>
          </div>
          <div className='col-md-4'>
          <div className='card text-center'>
          <div className='col-md-4 overflow'>
<img src={da} alt='img1' />
</div>
<div className='card-body text-dark'>
<h4 className='card-title'>card title</h4>
<p className='card-text text-secondary'>ghguyyuyuuyuy</p>
</div>
</div>
          </div>
          <div className='col-md-4'>
          <div className='card text-center'>
          <div className='col-md-4 overflow'>
<img src={da} alt='img1' />
</div>
<div className='card-body text-dark'>
<h4 className='card-title'>card title</h4>
<p className='card-text text-secondary'>ghguyyuyuuyuy</p>
</div>
</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default homePage;