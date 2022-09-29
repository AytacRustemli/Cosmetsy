import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { BASE_URL, FILE_PATH } from '../../api/config';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { addToFavoriesAction } from '../../redux/Actions/FavoriesAction';
import { getProductsAction } from '../../redux/Actions/ProductActions';
import { getBrandAction } from './../../redux/Actions/BrandAction';
import './brandDetail.scss'

const BrandDetail = () => {
  const { id } = useParams();
  const [brand, setBrands] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriesItems } = useSelector((state) => state.favories);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const notify = () =>
    toast(
      <Link to="/cart" style={{ textDecoration: "none" }}>
        "Product added to cart !"
      </Link>
    );
  const notifyF = () =>
    toast(
      <Link
        to="/wishlist"
        style={{ textDecoration: "none", zIndex: "9999999999999999" }}
      >
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

  const getBrand = async () => {
    await fetch(BASE_URL + "brand/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setBrands(data.message));
  };
  useEffect(() => {
    dispatch(getBrandAction());
    dispatch(getProductsAction());
    getBrand();
  }, [dispatch]);

  return (
    <div id="branddetail">
      <div className="top">
        <div className="box">
          <div className="image">
            <div className="d-flex">
              <p style={{ cursor: "pointer" }}>Brand:</p>
              <p style={{ marginLeft: "10px" }}>{brand.name}</p>
            </div>
          </div>
          <div className="bottom">
            <h1>{brand.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row">
            {products &&
              products
                .filter((x) => x.brandName == brand.name)
                .map((product) => (
                  <div className="col-lg-3" key={product.id}>
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
                        {product.isStock == true ? (
                          <span className="box1 number">
                            £{product.price}.00
                          </span>
                        ) : (
                          <span className="box1 number">
                            <del className="del">£{product.price}.00</del>£
                            {product.salePrice}.00
                          </span>
                        )}
                      </div>
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
    </div>
  )
}

export default BrandDetail