import React from "react";
import './register.scss'

const Register = () => {
  return (
    <div>
      <section id="register">
        <h3>Register</h3>
        <p>Username</p>
        <br />
        <input
          type="text"
          class="woocommerce-Input woocommerce-Input--text input-text"
          name="username"
          id="username"
          autocomplete="username"
          value=""
        />
        <br />
        <p>Email address</p> <br />
        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="" /> <br />
        <p>Password *</p>
        <input
          class="woocommerce-Input woocommerce-Input--text input-text"
          type="password"
          name="password"
          id="password"
          autocomplete="current-password"
        />
        <br />
        <button>REGISTER</button> <br />
      </section>
    </div>
  );
};

export default Register;
