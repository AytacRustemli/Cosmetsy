import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Products/product.scss";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "./../../redux/Actions/ProductActions";
import { FILE_PATH } from "../../api/config";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../redux/Actions/CartAction";
import { addToFavoriesAction } from "./../../redux/Actions/FavoriesAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriesItems } = useSelector((state) => state.favories);
  const dispatch = useDispatch();
  const notify = () =>
    toast(
      <Link to="/cart" style={{ textDecoration: "none" }}>
        "Product added to cart !"
      </Link>
    );
  const notifyF = () =>
    toast(
      <Link to="/wishlist" style={{ textDecoration: "none" }}>
        "Product added to wishlist !"
      </Link>
    );

  const addToCartHadler = (id, name) => {
    var myCart = cartItems.find((e) => e.id === id);
    if (myCart) {
      dispatch(addToCartAction(id, myCart.quantity + 1));
    } else {
      dispatch(addToCartAction(id, 1));
    }
  };

  const addToCartHandler = (id, name) => {
    var myCart = favoriesItems.find((e) => e.id === id);
    if (myCart) {
      dispatch(addToFavoriesAction(id, myCart.quantity + 1));
    } else {
      dispatch(addToFavoriesAction(id, 1));
    }
  };

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      <section id="product">
        <div className="container">
          <div className="top">
            <div className="d-flex justify-content-between">
              <h2>Best Seller Products</h2>
              <Link
                to="/shop"
                style={{ textDecoration: "none", color: "black" }}
              >
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
              {products &&
                products
                  .filter((x) => x.isStock)
                  .map((product) => (
                    <SwiperSlide>
                      <div className="containerr" key={product.id}>
                        <div className="row align-items-center">
                          <div className="col-lg-12">
                            <div className="box">
                              <div className="image">
                                <Link to={"/product/" + product.id}>
                                  <img
                                    src={`${FILE_PATH}${product.coverPhoto}`}
                                    alt=""
                                  />
                                </Link>
                                <div className="icons">
                                  <i class="fa-solid fa-eye icon"></i>
                                  <br />
                                  <i
                                    class="fa-solid fa-heart icon"
                                    onClick={() => {
                                      addToCartHandler(
                                        product.id,
                                        product.name
                                      );
                                      notifyF();
                                    }}
                                  ></i>
                                  <br />
                                  <i
                                    class="fa-solid fa-bag-shopping icon"
                                    onClick={() => {
                                      addToCartHadler(product.id, product.name);
                                      notify();
                                    }}
                                  ></i>
                                </div>
                              </div>

                              <div className="text">
                                <span className="box1 title">
                                  {product.categoryName}
                                </span>
                                <span className="box1 super">
                                  {product.name}
                                </span>
                                <span className="box1 number">
                                  £{product.price}.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>{" "}
          <hr />
          <div className="bottom2">
            <div className="row">
              {products &&
                products
                  .filter((x) => x.isStock)
                  .map((product) => (
                    <div className="containerr col-lg-6 col-6" key={product.id}>
                      <div className="image">
                        <Link to={"/product/" + product.id}>
                          <img
                            src={`${FILE_PATH}${product.coverPhoto}`}
                            alt=""
                          />
                        </Link>
                        <div className="icons">
                          <i class="fa-solid fa-eye icon"></i>
                          <br />
                          <i
                            class="fa-solid fa-heart icon"
                            onClick={() => {
                              addToCartHandler(product.id, product.name);
                              notifyF();
                            }}
                          ></i>
                          <br />
                          <i
                            class="fa-solid fa-bag-shopping icon"
                            onClick={() => {
                              addToCartHadler(product.id, product.name);
                              notify();
                            }}
                          ></i>
                        </div>
                      </div>

                      <div className="text">
                        <span className="box1 title">
                          {product.categoryName}
                        </span>
                        <span className="box1 super">{product.name}</span>
                        <span className="box1 number">£{product.price}.00</span>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <ToastContainer
          limit={3}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </section>
    </div>
  );
}

export default Product;
