import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./cartTotal.scss";
import { CheckOutAction } from './../../redux/Actions/CheckOutAction';
import { removeAllCartAction } from './../../redux/Actions/CartAction';
import { getUserAction } from './../../redux/Actions/UserAction';
import { FILE_PATH } from "../../api/config";

const CartTotal = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);

  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const addOrder = () => {
    if (userInfo.length !== 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Sifarisi tamamlamaq istediyinizden eminsiniz?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sifarisi tamamla",
          cancelButtonText: "Legv et!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (cartItems.length > 0) {
              dispach(CheckOutAction(userInfo.id));
              dispach(removeAllCartAction());
              navigate("/checkout");
            }
            else {
              Swal.fire("Səbətiniz boşdur.");
              navigate("/cart");
            }
          } 
          else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) 
          {
            swalWithBootstrapButtons.fire(
              "Ləğv olundu.",
              "error"
            );
          }
        });
    } 
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/account");
        }
      });
    }
  };

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, cartItems]);

  return (
    <div>
      <div id="cartTotal">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 box">
              <table>
                <thead>
                  <tr>
                    <th>PICTURE</th>
                    <th>PRODUCT</th>
                    <th className="product">PRICE</th>
                    <th>QUANTITY</th>
                    <th className="product">SUBTOTAL</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0
                  ? cartItems.map((product) => (
                      <tr>
                      <td>
                        <img
                          src={`${FILE_PATH}${product.img}`}
                          alt=""
                        />
                      </td>
                      <td>{product.name}</td>
                      <td className="product">{product.price} £</td>
                      <td>{product.quantity}</td>
                      <td className="product">{product.price * product.quantity} £</td>
                      <td>
                        <i class="fa-solid fa-x"></i>
                      </td>
                    </tr>
                    ))
                  : (
                    <>
                      <p>Your cart is currently empty.</p>
                      <div className="deneme">
                        <span className="shop">RETURN TO SHOP</span>
                      </div>
                    </>
                  )}
                  
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
                <div className="collaterals">
                    <div className="cart_totals">
                        <h2>Cart totals</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>SubTotal</th>      
                                    <td>£{totalPrice}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td style={{fontWeight:"700"}}>£{totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="deneme">
                          <span className='shop' onClick={() => addOrder()}>Proceed to checkout</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
