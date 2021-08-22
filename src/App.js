import React, { useEffect,useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import ProductsContext from 'context/products'
import Checkout  from 'pages/Checkout'
import {CartContext, useMoney} from 'context/cart'
import {FavContext, userMon}  from 'context/fav'
import Single_product from 'pages/single-product-page'
import firebase from 'utils/firebase'
// const {useState, useContext, createContext} = React
import Products from 'pages/Products'
import FourOhFour from 'pages/FourOhFour'
import 'css/reset.css';
import 'css/index.css';
import FavouritedItem from 'pages/FavouritedItem'


const App = () => {

   const [productsAr, setproductsAr] = useState([]) 
   const [cart, setCart] = useState([])
   const [fav, setFav] = useState([])
   const [loading, setloading] = useState(true)    
    const db = firebase.firestore()

    useEffect(() => {

      setloading(true)

      db.collection(`products`).get().then((snapshot) =>{
         // snapshot.docs.forEach(doc =>{
         //   const record= doc.data()
         // //   console.log( `FIRESTORE:`,record)
         // setproductsAr = ([...productsAr , record])
         // })
         
         setproductsAr(
             snapshot.docs.reduce((products, doc) =>{
             return [...products, doc.data()]
          }, [])
          
         )
         setloading(false)
       })
    }, [])
    console.log(productsAr);

    const addToCart = (id) => {
      const index = cart.findIndex((val) => val.id === id)
      
      if (index === -1) // product not found in the cart
        cart.push({id: id, count: 1})
      else
        cart[index].count++ // increase the "count" by +1
      
      setCart([...cart])
    }

    const addToFav = (id) => {
      const index = fav.findIndex((val) => val.id === id)
      
      if (index === -1) // product not found in the cart
        fav.push({id: id, count: 1})
      else
        fav[index].count++ // increase the "count" by +1
      
      setFav([...fav])
    }
    return (
      <>
      {
         
       loading && <div className="loading"><span className="flash">Loading...</span></div>
       
      }
       <Router>
         <Switch>
           <ProductsContext.Provider value={productsAr}>
           <CartContext.Provider value={{data: cart, updater: addToCart}}>
           <FavContext.Provider value={{data: fav, updater: addToFav}}>
             <BrowserRouter>
           <Switch>
             <Route exact path="/"> <Products data = {productsAr} /></Route>
             
             <Route  path="/cart"> <Checkout /> </Route>
             <Route  path="/favouriteditem"> <FavouritedItem /> </Route>
             <Route  path="*"><Single_product /></Route>
             <Route path="*"> <Products data={productsAr} /> </Route>
             <Route path="*"><FourOhFour /></Route>
             {/* <Route path="/404"><FourOhFour /></Route>
             <Redirect to="/404" /> */}
             <Redirect to="/" />
           </Switch>
           </BrowserRouter>
           </FavContext.Provider>
           </CartContext.Provider>
           </ProductsContext.Provider>
          </Switch>
       </Router>
       </>
      )
}
    
    export default App

   
	
	