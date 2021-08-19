import React, { useEffect,useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'
// const {useState, useContext, createContext} = React
import Products from 'pages/Products'
import FourOhFour from 'pages/FourOhFour'


const App = () => {

   const [productsAr, setproductsAr] = useState([]) 
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
    console.log(productsAr)
   //  const productsAr =[
   //      {
   //         id: 101,
   //         photo: `iphone-x.jpg`,
   //         name: `iPhone-x`,
   //         link: `product .html`,
   //         descrip: `iphone-X , 64gb to 512gb storages available, add to your cart now`,
   //         price: [1500.00,1319.00],
   //         ratings: 4.4,
   //         colors: [`white`,`black`,`rose gold`],
   //         storage: [`64`,`128`,`256`,`512`]
           
   //      },
   //      {
   //          id: 102,
   //          photo: `iphone-xr.jpg`,
   //          name: `iPhone-xr`,
   //          link: `product .html`,
   //          descrip: `iphone-XR , 64gb to 512gb storages available, add to your cart now`,
   //          price: [1029.00,799.00],
   //          colors: [`white`,`black`,`red`,`blue`,`yellow`,`coral`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 103,
   //          photo: `iphone-xs.jpg`,
   //          name: `iPhone-xs`,
   //          link: `product .html`,
   //          descrip: `iphone-XR , 64gb to 512gb storages available, add to your cart now`,
   //          price:[1000.00,899.00], 
   //          ratings: 4.4,
   //          colors: [`white`,`black`,`rose gold`],
   //          storage: [`32`,`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 104,
   //          photo: `iphone-11.jpg`,
   //          name: `iPhone-11`,
   //          link: `product .html`,
   //          descrip: `iphone-11 , 64gb to 512gb storages available, add to your cart now`,
   //          price: [1150.00,979.00],
   //          ratings: 4.4,
   //          colors: [`White`,`Black`,`Lilic`,`Lightyellow`,`Lightgreen`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 105,
   //          img: `iphone-11pro.jpg`,
   //          name: `iPhone-11pro`,
   //          link: `product .html`,
   //          descrip: `iphone-11Pro , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 106,
   //          img: `iphone-12mini.jpg`,
   //          name: `iPhone 12 mini`,
   //          link: `product .html`,
   //          descrip: `iphone-12 Mini , 64gb to 512gb storages available, add to your cart now.`,
   //          price: [800.00,699.00],
   //          colors: [`White`,`Black`,`Productred`,`Blue`,`Green`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 107,
   //          photo: `iPhone-12Pro.jpg`,
   //          name: `iPhone 12pro`,
   //          link: `product .html`,
   //          descrip: `iphone-12Pro , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 108,
   //          photo: `iPhone-12-pro-max.jpg`,
   //          name: `iPhone 12pro max`,
   //          link: `product .html`,
   //          descrip: `iphone-12Pro-Max , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Blue`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       { 
   //          id: 109,
   //          photo: `iphone-SE-2.jpg`,
   //          name: `iPhone SE-2`,
   //          link: `product .html`,
   //          descrip: `iphone-SE-2 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,599.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 110,
   //          photo: `iphone-SE-3.jpg`,
   //          name: `iPhone SE-3`,
   //          link: `product .html`,
   //          descrip: `iphone-SE-3 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 111,
   //          photo: `iphone-9.jpg`,
   //          name: `iPhone 9`,
   //          link: `product .html`,
   //          descrip: `iphone-9 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 112,
   //          photo: `iphone-8.jpg`,
   //          name: `iPhone 8`,
   //          link: `product .html`,
   //          descrip: `iphone-8 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 113,
   //          photo: `iphone-8-plus.jpg`,
   //          name: `iPhone 8-plus`,
   //          link: `product .html`,
   //          descrip: `iphone-8-Plus , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 114,
   //          photo: `iphone-7.jpg`,
   //          name: `iPhone 7`,
   //          link: `product .html`,
   //          descrip: `iphone-7 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 115,
   //          photo: `iphone-7-plus.jpg`,
   //          name: `iPhone 7-plus`,
   //          link: `product .html`,
   //          descrip: `iphone-7Plus , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 116,
   //          photo: `iphone-6.jpg`,
   //          name: `iPhone 6`,
   //          link: `product .html`,
   //          descrip: `iphone-6 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 117,
   //          img: `iphone-6s.jpg`,
   //          name: `iPhone 6s`,
   //          link: `product .html`,
   //          descrip: `iphone-6S , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 118,
   //          img: `iphone-5.jpg`,
   //          name: `iPhone 5`,
   //          link: `product .html`,
   //          descrip: `iphone-5 , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 119,
   //          photo: `iphone-5s.jpg`,
   //          name: `iPhone 5s`,
   //          link: `product .html`,
   //          descrip: `iphone-5S , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       },
   //       {
   //          id: 120,
   //          photo: `iphone-5c.jpg`,
   //          name: `iPhone 5c`,
   //          link: `product .html`,
   //          descrip: `iphone-5C , 64gb to 512gb storages available, add to your cart now.`,
   //          price:[1550.00,1305.00], 
   //          ratings: 4.4,
   //          colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
   //          storage: [`64`,`128`,`256`,`512`]
            
   //       }
   //  ]

     // FILE: App.js

    return (
      //  <Products data = {productsAr} />
      <>
      {
         
       loading && <div class="loading"><span class="flash">Loading...</span></div>
       
      }
       <Router>
       
         <Switch>
           <Route exact path="/"> <Products data = {productsAr} /></Route>
           
           
           <Route path="*"><FourOhFour /></Route>
           {/* <Route path="/404"><FourOhFour /></Route>
           <Redirect to="/404" /> */}
         </Switch>
       </Router>
       </>
      )
}
    
    export default App

   
	
	