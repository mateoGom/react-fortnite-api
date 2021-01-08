import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/style.module.css";

const Nav = () => {
  return (
    <nav>
      <h3>LOGO</h3>
      <ul className={style.navLink}>
        <Link className={style.navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link className={style.navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link className={style.navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
