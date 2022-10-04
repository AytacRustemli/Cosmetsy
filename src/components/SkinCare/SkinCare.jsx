import React from 'react'
import { Link } from 'react-router-dom'
import '../SkinCare/skincare.scss'

const SkinCare = () => {
  return (
    <div>
        <section id="skincare">
            <div className="container">
                <div className="row deneme">
                    <div className="col-lg-6 col-12">
                        <div className="image">
                            <img src="https://klbtheme.com/cosmetsy/wp-content/plugins/cosmetsy-core/elementor/images/image-text6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="text">
                            <h6>Botanical Skincare</h6>
                            <h5>Skincare made with <br /> the world’s finest</h5>
                            <p className='skincare'>Balance, purify, and heal your skin with Monastery.<br />
                            Ingredients of the highest quality.
                            </p>
                            <Link to='/shop' style={{textDecoration:"none"}}>
                                <div className="denemee">
                                    <span className='shop'>SHOP NOW</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SkinCare