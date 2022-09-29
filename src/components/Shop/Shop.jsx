import { Slider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FILE_PATH } from "../../api/config";
import { getBrandAction } from "../../redux/Actions/BrandAction";
import { addToCartAction } from "../../redux/Actions/CartAction";
import { getCategoryAction } from "../../redux/Actions/CategoryActions";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { getProductsAction } from "../../redux/Actions/ProductActions";
import "./shop.scss";

const Shop = () => {
  const [value, setValue] = React.useState([2, 10]);
  const { categories } = useSelector((state) => state.category);
  const { brands } = useSelector((state) => state.brand);
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

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getBrandAction());
    dispatch(getProductsAction());
  }, []);

  return (
    <div id="shop">
      <div className="top">
        <div className="box">
          <div className="image">
            <div className="d-flex">
              <Link to="/" style={{ textDecoration: "none",color:"black"}}>
                <p style={{ cursor: "pointer" }}>Home / </p>
              </Link>
              <p style={{ marginLeft: "10px" }}>Shop</p>
            </div>
          </div>
          <div className="bottom">
            <h1>Shop</h1>
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
            <div className="col-lg-3">
              <div className="box">
                <h4>Product categories</h4>
                {categories &&
                  categories.map((cat) => (
                    <div key={cat.id}>
                      <Link to={'/category/' + cat.id} style={{textDecoration:"none",color: "black"}}>
                        <p>{cat.name}</p>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="box">
                <h4>BRANDS</h4>
                {brands &&
                  brands.map((brand) => (
                    <div key={brand.id}>
                      <Link to={'/brand/' + brand.id} style={{textDecoration:"none",color:"black"}}>
                        <p>{brand.name}</p>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className="box2">
                <div
                  style={{
                    margin: "auto",
                    // display: 'block',
                    width: "fit-content",
                  }}
                >
                  <h4>Shop by Price</h4>
                  <Typography id="range-slider" gutterBottom></Typography>
                  <Slider
                    value={value}
                    onChange={rangeSelector}
                    valueLabelDisplay="auto"
                  />
                  Your range of Price is between £ {value[0]} - £ {value[1]}
                </div>
                <button>Filter</button>
              </div>
            </div>
            <div className="col-lg-9 bottom1">
              <div className="containerr">
                <div className="row">
                  {products &&
                    products.map((product) => (
                      <div className="col-lg-4" key={product.id}>
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
  );
};

export default Shop;
