import React from 'react'
import '../Latest/latest.scss'

const Latest = () => {
  return (
    <div>
        <section id="latest">
            <div className="container">
                <div className="top">
                    <div className="d-flex justify-content-between">
                        <h2>Latest News</h2>
                        <div className="text d-flex">
                            <span>View All Posts</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-47-370x250.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <div className="d-flex">
                                        <span className="box1 date">7 FEB 2021</span>
                                        <span className="box1 title">SKINCARE</span>
                                    </div>
                                    <span className='box1 super'>The 7 Best Bikini Trimmers to Get Ready for Swimsuit Season</span>
                                    <span className='box1 number'><i className='i'>By</i>Sinan</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-46-370x250.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <div className="d-flex">
                                        <span className="box1 date">7 FEB 2021</span>
                                        <span className="box1 title">SKINCARE</span>
                                    </div>
                                    <span className='box1 super'>The 7 Best Bikini Trimmers to Get Ready for Swimsuit Season</span>
                                    <span className='box1 number'><i className='i'>By</i>Sinan</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <div className="image">
                                    <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-45-370x250.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <div className="d-flex">
                                        <span className="box1 date">7 FEB 2021</span>
                                        <span className="box1 title">SKINCARE</span>
                                    </div>
                                    <span className='box1 super'>The 7 Best Bikini Trimmers to Get Ready for Swimsuit Season</span>
                                    <span className='box1 number'><i className='i'>By</i>Sinan</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <hr />
            </div> 
        </section>
    </div>
  )
}

export default Latest