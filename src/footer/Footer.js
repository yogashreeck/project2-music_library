import React, { Component } from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-5 about">
                    <h5 className="footer-heading mb-4">About Us</h5>
                    <p>We bring together your favourite music services and join up listening, watching and sharing to
                      connect your musical world.Below you can visualise, in real-time, the listening habits and trends
                      of My Music global community.</p>
                  </div>
                  <div className="col-md-3 ml-auto small">
                    <h5 className="footer-heading mb-4">Quick Links</h5>
                    <ul className="list-unstyled">
                      <li><a >About Us</a></li>
                      <li><a>Services</a></li>
                      <li><a >Testimonials</a></li>
                      <li><a>Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 small">
                    <h5 className="footer-heading mb-4">Follow Us</h5>
                    <SocialIcon url="https://twitter.com/" className="foot-icon" />
                    <SocialIcon url="https://www.facebook.com/" className="foot-icon" />
                    <SocialIcon url="https://www.whatsapp.com/" className="foot-icon" />
                    <SocialIcon url="http://linkedin.com/" className="foot-icon" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="footer-heading mb-4">Subscribe</h5>
                <form action="#" method="post" className="footer-subscribe">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email"
                      aria-label="Enter Email" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center about">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>

                    Copyright  All rights reserved | This template is made
                    <i className="icon-heart" aria-hidden="true"></i> by <a >My music</a>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;