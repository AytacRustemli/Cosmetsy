import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <p className="menu-item">
        Home
      </p>
      <p className="menu-item">
        About Us
      </p>
      <p className="menu-item">
        Shop
      </p>
      <p className="menu-item">
        Categories
      </p>
      <p className="menu-item">
        Our News
      </p>
      <p className="menu-item">
        Contact Us
      </p>
    </Menu>
  );
};
