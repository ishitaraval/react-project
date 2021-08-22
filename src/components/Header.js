import React from 'react'
import logo from 'img/logo.png'
import {Link} from 'react-router-dom'
import CartCount from 'components/CartCount'
import FavCount from 'components/FavCount'


const Header = () => {

  return (
    
   <header className="topheader">
      <a href="index.html" >
       <img src= {logo} className="logo"/>
      </a>
      <h2 style= {{color: 'white'}}>apple store</h2>
      <nav  className="navbar">
        <fieldset className="search">
       <label htmlFor="sort" style={{color:"white",padding:'5px 10px'}}>Search Product Name:</label>
       <input type="search" placeholder="Search by product name"></input>
       </fieldset>
        <ul>
          <li><a href="#" style = {{color: 'black'}}>Shop</a></li>
          <li><a href="#" style = {{color: 'black'}}>About</a></li>
          <li><a href="#" style = {{color: 'black'}}>Contact</a></li>
          <li><a href="#" style = {{color: 'black'}}> FAQ</a></li>
        </ul>
        <nav className="header-cart">
        
        <Link to="/fav"><FavCount /></Link>
         {/* <li><a href="#" style = {{color: 'black'}}><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li> */}
         {/* <li><a href="#" style = {{color: 'black'}}><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li> */}
         <Link to="/cart"><CartCount /></Link>
       </nav>
      </nav>
     
       

    </header>

  )
}

export default Header