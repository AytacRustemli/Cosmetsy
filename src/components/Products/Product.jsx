import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../Products/product.scss'
import 'swiper/scss/navigation';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from './../../redux/Actions/ProductActions';
import { FILE_PATH } from '../../api/config';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { addToFavoriesAction } from './../../redux/Actions/FavoriesAction';


function Product() {
    const { products } = useSelector((state) => state.products)
    const  {cartItems}  = useSelector((state) => state.cart)
    const  {favoriesItems}  = useSelector((state) => state.favories)
    const dispatch = useDispatch();

    const addToCartHadler = (id,name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
          dispatch(addToCartAction(id, myCart.quantity + 1))
        } else {
          dispatch(addToCartAction(id, 1))
        }
    }
    
      const addToCartHandler = (id,name) => {
        var myCart = favoriesItems.find(e => e.id === id)
        if (myCart) {
          dispatch(addToFavoriesAction(id, myCart.quantity + 1))
        } else {
          dispatch(addToFavoriesAction(id, 1))
        }
      }

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])


  return (
    <div>
        <section id="product">
            <div className="container">
                <div className="top">
                    <div className="d-flex justify-content-between">
                        <h2>Best Seller Products</h2>
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
                        {
                            products &&
                            products.filter(x=>x.isStock).map((product) => (
                                <SwiperSlide>
                                    <div className="containerr" key={product.id}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <div className="box">
                                                    <Link to={'/product/' + product.id}>
                                                    <div className="image">
                                                        <img src={`${FILE_PATH}${product.coverPhoto}`} alt="" />
                                                        <div className="icons">
                                                            <i class="fa-solid fa-eye icon"></i><br />
                                                            <i class="fa-solid fa-heart icon"  onClick={() => addToCartHandler(product.id, product.name)}></i><br />
                                                            <i class="fa-solid fa-bag-shopping icon" onClick={() => addToCartHadler(product.id, product.name)}></i>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    <div className="text">
                                                        <span className="box1 title">{product.categoryName}</span>
                                                        <span className='box1 super'>{product.name}</span>
                                                        <span className='box1 number'>£{product.price}.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </div> <hr />
            </div> 
        </section>
    </div>
  )
}

export default Product