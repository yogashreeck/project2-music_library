import React, { Component } from 'react';
import './homePage.css'
import BackgroundImage from "react-background-image";
import hdImage from "./images/mic.jpg";
import selena from './images/selena.jpg'
import shreya from './images/shreya.jpg';
import rahman from './images/rahman.jpg';
import sonu from './images/sonu.jpg';
import arijit from './images/arijit.jpg';
import taylor from './images/taylor.jpg';

class homePage extends Component {
  render() {
    return (
      <div>
        <BackgroundImage
          src={hdImage}
          className="myCustomClass"
        >
          <div className='text-left back'>
            <p className='main-text'>Music</p>
            <p className='sub-text'>We bring together your favourite music services and join up listening,
            watching and sharing to connect your musical world.Below you can visualise, in real-time, the listening
            habits and trends of My Music global community. Go Explore.</p>
          </div>
        </BackgroundImage>

        <section class="site-section pop-head" >
          <div class="container">
            <div class="row mb-5">
              <div class="col-12 text-center">

                <h2 class="section-title mb-3">Popular Artists</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={shreya} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">Shreya Ghoshal</h2>
                  <p>Shreya Ghoshal is an Indian playback singer. She has received
                    four National Film Awards, seven Filmfare Awards including six for Best Female Playback Singer, nine
                    Filmfare Awards South, four Kerala State Film Awards and two Tamil Nadu State Film Awards.</p>
                  <p><a href="https://en.wikipedia.org/wiki/Shreya_Ghoshal">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={rahman} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">A. R. Rahman</h2>
                  <p>Allahrakka Rahman; born A. S. Dileep Kumar known professionally
                    as A. R. Rahman, is an Indian music director, singer and music producer. His works are noted for
                    integrating Indian classical music with electronic music, world music and traditional orchestral
                  arrangements.</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={selena} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">Selena Gomez</h2>
                  <p>Selena Marie Gomez is an American singer and actress.
                    After appearing on the children's television series Barney & Friends, she received wider recognition
                    for her portrayal of Alex Russo on the Disney Channel television series Wizards of Waverly Place,
                    which aired for four seasons from 2007 until 2012</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
            
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={sonu} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">Sonu Nigam</h2>
                  <p>Sonu Nigam is an Indian playback singer, composer, live performer, host, and actor. He sings 
                    predominantly in Hindi and Kannada language films. He has also sung in English, Bengali, Manipuri, 
                    Gujarati, Tamil, Telugu, Marathi, Tulu, Assamese, Odia, Nepali, Maithili, Malayalam and various Indian 
                    languages.</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={arijit} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">Arijit Singh</h2>
                  <p>Arijit Singh is an Indian singer, music producer, recordist and music programmer. He sings 
                    predominantly in Hindi and Bengali, but has also performed in various other Indian languages. Singh 
                    is regarded as one of the most versatile and successful singers in the history of Indian music and 
                    Hindi cinema.</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={taylor} alt="Image" class="img-fluid" />
                  <h2 class="font-size-regular">Taylor Swift</h2>
                  <p>Taylor Alison Swift is an American singer-songwriter. She is known for narrative songs about her 
                    personal life, which have received widespread media coverage. Born and raised in Pennsylvania, Swift 
                    moved to Nashville, Tennessee at the age of 14 to pursue a career in country music.</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
          </div>
          </div>
        </section>
      </div>
    );
  }
}

export default homePage;