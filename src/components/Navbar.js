import React from 'react';
import './Navbar.scss';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="logo">
          <h1><a href="#home">SMOOTHIE SHOP</a></h1>
        </div>
        <a className="navbar-shopping-cart" href="#checkOut">
          <div> CART </div>
          <div className="navbar-shopping-cart-info">
          </div>
        </a>
      </nav>
    )
  }
}
