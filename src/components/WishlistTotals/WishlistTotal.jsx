import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./wishlistTotal.scss";
import { CheckOutAction } from "./../../redux/Actions/CheckOutAction";
import {
  addToCartAction,
  removeAllCartAction,
} from "./../../redux/Actions/CartAction";
import { getUserAction } from "./../../redux/Actions/UserAction";
import { FILE_PATH } from "../../api/config";
import { removeFromFavories } from "../../redux/Actions/FavoriesAction";

const WishlistTotal = () => {
  const { favoriesItems } = useSelector((state) => state.favories);
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);

  const countTotal = () => {
    var price = 0;
    favoriesItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const addToCartHadler = (id, name) => {
    var myCart = cartItems.find((e) => e.id === id);
    if (myCart) {
      dispach(addToCartAction(id, myCart.quantity + 1));
    } else {
      dispach(addToCartAction(id, 1));
    }
  };

  const removeFromFavoriesHandler = (id) => {
    dispach(removeFromFavories(id));
  };

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, favoriesItems]);

  return (
    <div>
      <div id="wishlistTotal">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 box">
              <table>
                <thead>
                  <tr>
                    <th>PICTURE</th>
                    <th>PRODUCT</th>
                    <th className="price">PRICE</th>
                    <th className="price">ADD TO CART</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {favoriesItems.length > 0 ? (
                    favoriesItems.map((product) => (
                      <tr>
                        <td>
                          <img src={`${FILE_PATH}${product.img}`} alt="" />
                        </td>
                        <td>{product.name}</td>
                        <td className="price">{product.price} £</td>
                        <td className="price">
                          <div className="deneme" style={{marginTop :"0px"}}>
                            <span className="shop" onClick={() =>addToCartHadler(product.id, product.name)}>ADD TO CART</span>
                          </div>
                        </td>
                        <td>
                          <i
                            class="fa-solid fa-x"
                            onClick={() =>
                              removeFromFavoriesHandler(product.product)
                            }
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>
                      <p>Wishlist is currently empty.</p>
                      <div className="deneme">
                        <span className="shop">RETURN TO SHOP</span>
                      </div>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistTotal;
