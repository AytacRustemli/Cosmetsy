import React from "react";
import { Link } from "react-router-dom";
import "./cartTotal.scss";

const CartTotal = () => {
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
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/pr-13-1-450x450.jpg"
                        alt=""
                      />
                    </td>
                    <td>Superfood Glow Priming Moisturiser</td>
                    <td>£49.00</td>
                    <td>2</td>
                    <td>£147.00</td>
                    <td>
                      <i class="fa-solid fa-x"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
               <div className="deneme">
                   <span className='shop'>SHOP NOW</span>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="collaterals">
                    <div className="cart_totals">
                        <h2>Cart totals</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>SubTotal</th>      
                                    <td>£147.00</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td style={{fontWeight:"700"}}>£147.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="deneme">
                            <Link to='/checkout' style={{textDecoration:"none"}}>
                            <span className='shop'>Proceed to checkout</span>
                            </Link>
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
