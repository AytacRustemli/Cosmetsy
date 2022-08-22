import React from 'react'
import '../Featured/featured.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss/navigation';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';

const Featured = () => {
  return (
    <div>
        <section id="featured">
            <div className="container">
                <div className="top">
                    <div className="d-flex justify-content-between">
                        <h2>Featured Products</h2>
                        <div className="text d-flex">
                            <span>View All Products</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={2}
                        slidesPerView={4}
                        navigation
                        scrollbar={{ draggable: false }}
                    >
                        <SwiperSlide>
                            <div className="containerr">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="box">
                                            <div className="image">
                                                <img src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/pr-13-1-570x670.jpg" alt="" />
                                                <div className="icons">
                                                    <i class="fa-solid fa-eye icon"></i><br />
                                                    <i class="fa-solid fa-heart icon"></i><br />
                                                    <i class="fa-solid fa-bag-shopping icon"></i>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <span className="box1 title">SKINCARE</span>
                                                <span className='box1 super'>Superfood Glow Priming Moisturiser</span>
                                                <span className='box1 number'><del className='del'>₼ 50.00</del>49.00 ₼</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> <hr style={{marginLeft: "50px"}} />
        </section>
    </div>
  )
}

export default Featured