import React from 'react'
import logo from 'img/winHubLogo1.png';

const Header = () => {

  return (
    

    <header className="page-header">
      <a href="index.html" className="logo">
         <img src="img/logo.svg"/>
      </a>

      <button type="button" class="nav-toggle">
         <span class="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" className="navigation">
        <ul className="menu">
          <li><a href="#">Shop</a>
            <ul className="submenu">
              <li><a href="#" style="background-color: black; color:cornflowerblue;">iphone 12 promax</a></li>
              <li><a href="#"  style="background-color: black; color:cornflowerblue;">iphone 12 pro</a></li>
              <li><a href="#" style="background-color: black; color:cornflowerblue;">iphone 12 mini</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      
      <form className="searchbar m-hide">
        <label htmlFor= "Filtername">Search Product Name: 
           <input type="search" name="find" id="find" placeholder="find the products" class="find"/>
        </label>
        <button type="button"><span class="material-icons">search</span></button>
      </form>

      <div className="your-products">
       <ul className="header-cart">
         <li><a href="#"><span class="material-icons" aria-label="Favourites">favorite_border</span></a></li>
         <li><a href="#"><span class="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li>
       </ul>
      </div>
    </header>

  )
}

export default Header