import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './fill.scss'
import { BASE_URL } from './../../api/config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fill = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const notify = () =>
    toast(
      <Link to={'/contact'} style={{ textDecoration: "none", zIndex: "9999999999999999" }}>
        "We will answer your question via email or phone number!"
    </Link>
    );

  const postData = async () => {
    fetch(`${BASE_URL}contact/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: name,
        userEmail: email,
        userPhone: phone,
        message: message
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div id='fill'>
      <div className="container">
        <div className=" row">
          <div className="col-lg-8 col-12 col-md-12 bottom">
            <h2>Contact Us for Cosmetsy</h2>
            <input type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)}/> <br />
            <input type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)}/> <br />
            <input type="text" placeholder='Your phone' onChange={(e) => setPhone(e.target.value)}/> <br />
            <input type="text" placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>

            <button onClick={() => {postData(); notify();}}>Submit</button>

            <div className="left">
              <h3>Contact Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <div className="spanBox">
                <p><i class="fa-solid fa-location-dot"></i>205 Middle Road, 2nd Floor, New York</p>
                <p><i class="fa-solid fa-phone"></i>+816 (222) 654 88 76</p>
                <p><i class="fa-solid fa-envelope"></i>hello@example.com</p>
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
  )
}

export default Fill