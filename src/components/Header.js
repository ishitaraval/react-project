import React from 'react'
import logo from 'img/logo.png'

const Header = () => {

  return (
    

    <header className="page-header">
      <a href="index.html" className="logo">
       <img src= {logo}/>
      </a>

      <button type="button" className="nav-toggle">
        <span className="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" className="navigation">
        <ul className="menu">
          <li><a href="#">Shop</a>
            <ul className="submenu">
              <li><a href="#" style={{backgroundColor: 'black', color:'cornflowerblue'}}>iphone 12 promax</a></li>
              <li><a href="#"  style={{backgroundColor: 'black', color:'cornflowerblue'}}>iphone 12 pro</a></li>
              <li><a href="#" style={{backgroundColor:'black', color:'cornflowerblue'}}>iphone 12 mini</a></li>
            </ul>
          </li>
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

      <div className="your-products">
       <ul className="header-cart">
         <li><a href="#"><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li>
         <li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li>
       </ul>
      </div>
    </header>

  )
}

export default Header