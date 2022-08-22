import React from 'react'
import '../Cream/cream.scss'

const Cream = () => {
  return (
    <div>
      <section id="cream">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box">
                <div className="image">
                  <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-16.jpg" alt="" />
                </div>
                <div className="text">
                  <h3>Instant Overnight Recovery Cream</h3>
                  <p>Balance, purify, and heal your skin with Cosmetsy. Ingredients of the highest quality, in their.</p>
                  <span>Shop Now</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <div className="image">
                  <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-17.jpg" alt="" />
                </div>
                <div className="text">
                  <h3>Gentle Gel Facial Cleanser Bergomat</h3>
                  <p>Balance, purify, and heal your skin with Cosmetsy. Ingredients of the highest quality, in their.</p>
                  <span>Shop Now</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cream