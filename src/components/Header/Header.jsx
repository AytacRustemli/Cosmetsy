import React from 'react'
import '../Header/Header.scss'
import ScrollToTop from "react-scroll-to-top";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="left">
              <div className="d-flex align-items-center">
                <div className="icon">
                  <i class="fa-solid fa-bars"></i>
                </div>
                <div className="image">
                  <img width='168px' src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/logo-dark.png" alt="" />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="d-flex">
                <ul className='main d-flex list-unstyled align-items-center'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Shop</li>
                  <li>Categories</li>
                  <li>Our News</li>
                  <li>Contact Us</li>
                </ul>
                <div className="icons d-flex">
                  <i class="fa-solid fa-user"></i>  
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-solid fa-bag-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop smooth />
    </div>
  )
}

export default Header