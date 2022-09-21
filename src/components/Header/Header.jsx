import React, { useEffect, useState } from "react";
import "../Header/Header.scss";
import ScrollToTop from "react-scroll-to-top";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../redux/Actions/UserAction";
import { FILE_PATH } from "../../api/config";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () =>{
    dispatch(logoutUserAction())
    navigate("/")
  }

  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };
  

  useEffect(() => {
    countTotal();
    // dispach(getUserAction());
  }, [totalPrice, cartItems]);

  return (
    <div>
      <section id="header">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"header"} />
        <div id="navbar">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="left">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img
                      width="168px"
                      src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/logo-dark.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="d-flex">
                  <ul className="main d-flex list-unstyled align-items-center">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li>Home</li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <li>About Us</li>
                    </Link>
                    <Link to="/shop" style={{ textDecoration: "none" }}>
                      <li>Shop</li>
                    </Link>
                    <Link to="/categories" style={{ textDecoration: "none" }}>
                      <li>Categories</li>
                    </Link>
                    <Link to="/blog" style={{ textDecoration: "none" }}>
                      <li>Our News</li>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      <li>Contact Us</li>
                    </Link>
                  </ul>
                  <div className="icons d-flex">
                    {
                      userInfo.length === 0 ? (
                        <Link to='/account' style={{ textDecoration: "none" , marginTop : "-4px", color:"black"}}>
                          <i class="fa-solid fa-user"></i>
                        </Link>
                      ) : 
                      (
                        <Link to='/finish' style={{ textDecoration: "none" , marginTop : "-4px", color:"black"}}>
                          <i class="fa-solid fa-user"></i>
                        </Link>
                      )
                    }
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <div className="cart">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <div className="box">
                        <div className="top">
                          <span className="header6">Your Cart </span>
                        </div>
                        <hr />
                        <div className="center">
                          <div className="row">
                            {
                              cartItems.length > 0 
                              ? cartItems.map((product) => (
                                <>
                                  <div className="col-lg-4 my-2">
                              <img
                                width="100%"
                                src={`${FILE_PATH}${product.img}`}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-8 my-2">
                              <div className="row align-items-center justify-content-between">
                                <div className="col-lg-10">
                                  <h6 className="samsung">
                                    {product.name}
                                  </h6>
                                  <div className="d-flex justify-content-between">
                                    <p className="price">{product.price} £</p>
                                    <p>Quantity : {product.quantity}</p>
                                  </div>
                                  
                                </div>
                                <div className="col-lg-2">
                                  <i class="fa-solid fa-x"></i>
                                </div>
                              </div>
                            </div>
                                </>
                              )) : ("bosdur sebet")
                            }
                            
                          </div>
                        </div>
                        <hr />
                        <div className="bottom">
                          <div className="text">
                            <div className="row">
                              <div className="col-lg-6">
                                <span className="total">Subtotal</span>
                              </div>
                              <div className="col-lg-6">
                                <span className="money">£{totalPrice}</span>
                              </div>
                            </div>
                          </div>
                          <div className="buttonDiv">
                            <button className="view">
                              <Link to="/cart">View cart</Link>
                            </button>
                            <br />
                            <button className="check">
                              <Link to="/checkout">CHECKOUT</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop smooth />
    </div>
  );
};

export default Header;
