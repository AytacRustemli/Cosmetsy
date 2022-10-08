import React from 'react'
import './fill.scss'

const Fill = () => {
  return (
    <div id='fill'>
      <div className="container">
        <div className=" row">
          <div className="col-lg-8 col-12 col-md-12 bottom">
            <h2>Contact Us for Cosmetsy</h2>
            <input type="text" placeholder='Your name'/> <br />
            <input type="text" placeholder='Your email' /> <br />
            <input type="text" placeholder='Your phone' /> <br />
            <input type="text" placeholder='Message' />

            <button>Submit</button>

            <div className="left">
              <h3>Contact Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <div className="spanBox">
                <p><i class="fa-solid fa-location-dot"></i>205 Middle Road, 2nd Floor, New York</p>
                <p><i class="fa-solid fa-phone"></i>+816 (222) 654 88 76</p>
                <p><i class="fa-solid fa-envelope"></i>hello@example.com</p>
              </div>

            </div>
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default Fill