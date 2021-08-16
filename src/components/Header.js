import React from 'react'
import logo from 'img/logo.png'

const Header = () => {

  return (
    

    <header className="topheader">
      <a href="index.html" className="logo">
       <img src= {logo}/>
      </a>
      <h2>apple store</h2>

      <button type="button" className="nav-toggle">
        <span className="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" className="navbar">
        <ul className="menu">
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      
      <form className="searchbar">
        <label htmlFor= "Filtername">Search Product Name: 
          <input type="search" name="find" id="find" placeholder="find the products" className="find"/>
        </label>
        <button type="button"><span className="material-icons">search</span></button>
      </form>


       <ul className="header-cart">
         <li><a href="#"><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li>
         <li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li>
       </ul>

    </header>

  )
}

export default Header