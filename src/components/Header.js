import React from 'react'
import logo from 'img/logo.png'

const Header = () => {

  return (
    
   <header className="topheader">
      <a href="index.html" >
       <img src= {logo} className="logo"/>
      </a>
      <h2>apple store</h2>
      <nav aria-label="Primary" className="navbar">
       <input type="search" placeholder="Search" />
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul className="header-cart">
         <li><a href="#"><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li>
         <li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li>
       </ul>
      </nav>

       

    </header>

  )
}

export default Header