import React from 'react'
import '../Category/category.scss'

const Category = () => {
  return (
    <div>
        <section id="category">
            <div className="container">
                <div className="text">
                    <span>Follow Us on Instagram</span>
                    <h3>#cosmetsy</h3>
                </div>
                <div className="image">
                    <div className="d-flex">
                        <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/sb-instagram-feed-images/146690167_1092778534480791_2508292805730707430_nlow.jpg" alt="" />
                        <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/sb-instagram-feed-images/147060049_247152490414118_8953246016809088426_nlow.jpg" alt="" />
                        <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/sb-instagram-feed-images/147032792_1160031771118015_4117443447417177135_nlow.jpg" alt="" />
                        <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/sb-instagram-feed-images/146338993_428448751697366_7960391196911720399_nlow.jpg" alt="" />
                        <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/sb-instagram-feed-images/146741984_779599999327218_7460124086517987336_nlow.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section id="subscribe">
            <div className="container">
                <div className="text1">
                    <h6>SUBSCRIBE FOR NEWS</h6>
                    <h2>Subscribe to our newsletter and get 10% off on your <br /> first order.</h2>
                    <div className="email">
                        <div className="d-flex">
                            <input class="newsletter-input" type="email" name="EMAIL" placeholder="Your email address" required="" />
                            <button type="submit" class="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div> <hr />
            </div> 
        </section>
    </div>
  )
}

export default Category