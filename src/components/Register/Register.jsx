import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.scss'
import { BASE_URL } from './../../api/config';
import Swal from "sweetalert2";
import { Alert } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const registerUser = async () => {
    var user = await fetch(`${BASE_URL}Auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
    }).then((respons) => respons.json());

    if (user.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə yaradıldı!",
        showConfirmButton: false,
        timer: 1500,
      }).then((c) => {
        navigate("/account");
      });
    } else {
      setErrorMessage(user.message);
    }
  };

  return (
    <div>
      <section id="register">
        <h3>Register</h3>
        {errorMessage && (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
          )}
        <p>Username</p>
        <br />
        <input
          type="text"
          class="woocommerce-Input woocommerce-Input--text input-text"
          name="username"
          id="username" onChange={(e) => setFullName(e.target.value)}
          autocomplete="username"
          
        />
        <br />
        <p>Email address</p> <br />
        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" onChange={(e) => setEmail(e.target.value)} autocomplete="email" /> <br />
        <p>Password *</p>
        <input
          class="woocommerce-Input woocommerce-Input--text input-text"
          type="password"
          name="password"
          id="password" onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
        />
        <br />
        <button  onClick={() => registerUser()}>REGISTER</button> <br />
      </section>
    </div>
  );
};

export default Register;
