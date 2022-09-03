import React from "react";
import "../Header/Header.scss";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import SideBar from "../sidebar";

const Header = () => {
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
                    <li>Shop</li>
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
                    <i class="fa-solid fa-user"></i>
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
                            <div className="col-lg-4">
                              <img
                                width="100%"
                                src="https://cdn.pixabay.com/photo/2022/02/12/19/58/cat-7009836_960_720.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-lg-8">
                              <div className="row align-items-center justify-content-between">
                                <div className="col-lg-10">
                                  <h6 className="samsung">
                                    Samsung C49J89: £875, Debenhams Plus
                                  </h6>
                                  <p className="price">$255.00</p>
                                </div>
                                <div className="col-lg-2">
                                  <i class="fa-solid fa-x"></i>
                                </div>
                              </div>
                            </div>
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
                                <span className="money">$255.00</span>
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
