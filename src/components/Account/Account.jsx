import React from "react";
import { Link } from "react-router-dom";
import './account.scss'

const Account = () => {
  return (
    <div className="container">
      <section id="account">
        <div className="box">
          <div className="image">
            <div className="d-flex">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p style={{ cursor: "pointer" }}>Home / </p>
              </Link>
              <p style={{ marginLeft: "10px" }}>My account</p>
            </div>
          </div>
          <div className="bottom">
            <h6>My account</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
