import React from 'react'
import { Link } from 'react-router-dom'
import '../Botanical/botanical.scss'

const Botanical = () => {
  return (
    <div>
        <section id="botanical">
            <div className="container">
                <div className="text">
                    <h6>Botanical Skincare</h6>
                    <h3>Skincare made with the <br /> world’s finest plant oils <br /> and absolutes.</h3>
                    <p className='skincare'>We all have skincare concerns: it's not always 'simple'. Glowbar makes it easy <br />
                       with 30-minute expert sessions targeting your top skincare concerns.
                    </p>
                    <Link to='/shop' style={{textDecoration : "none"}}>
                    <div className="deneme">
                        <span className='shop'>SHOP NOW</span>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Botanical