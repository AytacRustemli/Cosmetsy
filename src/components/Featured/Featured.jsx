import React, { useEffect } from 'react'
import '../Featured/featured.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss/navigation';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../redux/Actions/ProductActions';
import { FILE_PATH } from '../../api/config';
import { Link } from 'react-router-dom';

const Featured = () => {
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])


  return (
    <div>
        <section id="featured">
            <div className="container">
                <div className="top">
                    <div className="d-flex justify-content-between">
                        <h2>Discounted Products</h2>
                        <Link to='/shop' style={{textDecoration:"none",color:"black"}}>
                            <div className="text d-flex">
                                <span>View All Products</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </Link>
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
                        {
                            products &&
                            products.filter(x=>x.isSale).map((product) => (
                                <SwiperSlide>
                                    <div className="containerr" key={product.id}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <div className="box">
                                                    <div className="image">
                                                        <Link to={'/product/' + product.id}>
                                                            <img src={`${FILE_PATH}${product.coverPhoto}`} alt="" />
                                                        </Link>
                                                        <div className="icons">
                                                            <i class="fa-solid fa-eye icon"></i><br />
                                                            <i class="fa-solid fa-heart icon"></i><br />
                                                            <i class="fa-solid fa-bag-shopping icon"></i>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="box1 title">{product.categoryName}</span>
                                                        <span className='box1 super'>{product.name}</span>
                                                        <span className='box1 number'><del className='del'>£{product.price}.00</del>£{product.salePrice}.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>  <hr />
            </div>
        </section>
    </div>
  )
}

export default Featured