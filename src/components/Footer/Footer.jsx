import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="top">
            <div className="row">
              <div className="col-lg-2">
                <h4>ABOUT COSMETSY</h4>
                <ul className='list-unstyled'>
                  <li>Our History</li>
                  <li>Sourcing & Ingredients</li>
                  <li>Packaging philosophy</li>
                  <li>Customer reviews</li>
                  <li>The Newest List</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>CONTACT US</h4>
                <ul className='list-unstyled'>
                  <p>Regarding your order <br />
                      +45 6093 2222 <br />
                      shop@example.com
                  </p>
                  <p>Other inquiries <br />
                  +45 5357 1123 <br />
                  info@example.com
                  </p>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>SHOP FOR COSMETSY</h4>
                <ul className='list-unstyled'>
                  <li>New Arrivals</li>
                  <li>Trending Products</li>
                  <li>Skincare</li>
                  <li>Hair & Colors</li>
                  <li>Makeup</li>
                  <li>Body & Mind</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>SUPPORT</h4>
                <ul className='list-unstyled'>
                  <li>Newsletter</li>
                  <li>Community Guidelines</li>
                  <li>Advertise Online</li>
                  <li>Privacy Notice</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>SUBSCRIBE FOR NEWS</h4>
                <ul className='list-unstyled'>
                  <p>Subscribe to our newsletter and get 10% off on your first order.</p>
                  <div className="d-flex">
                    <input class="newsletter-input" type="email" name="EMAIL" placeholder="Your email address" required="" />
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                  
                </ul>
              </div>
            </div>
          </div><hr />
          <div className="bottom">
            <div className="d-flex justify-content-between">
              <div className="p">
                <p>Cosmetsy © Copyright 2022 - All rights reserved. Created by "KLBTheme".</p>
              </div>
              <div className="span">
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Pinterest</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer