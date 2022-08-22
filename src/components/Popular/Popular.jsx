import React from 'react'
import '../Popular/popular.scss'

const Popular = () => {
  return (
    <div>
        <section id="popular">
            <div className="container">
                <div className="top">
                    <h2>Popular Categories</h2>
                    <p>Etiam eget faucibus turpis, sit amet viverra eros. Maecenas eget vehicula nisl. Quisque imperdiet iaculis dignissim. In hac habitasse platea dictumst.</p>
                </div>
                <div className="bottom">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-26.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Face</h4>
                                    <span>SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-24.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Concaler</h4>
                                    <span>SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-32.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Lips</h4>
                                    <span>SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-30.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Skincare</h4>
                                    <span>SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Popular