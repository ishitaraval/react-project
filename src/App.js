import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'material-design-icons/iconfont/material-icons.css'
import Products from 'pages/Products'
import FourOhFour from 'pages/FourOhFour'


const App = () => {

    const productsAr =[
        {
           iprodt_img: `iphone-x.jpg`,
           iprodt_name: `iPhone-x`,
           iprodt_link: `product .html`,
           iprodt_descrip: `iphone-X , 64gb to 512gb storages available, add to your cart now`,
           iprodt_price: [1500.00,1319.00],
           iprodt_ratings: 4.4,
           iprodt_colors: [`white`,`black`,`rose gold`],
           iprodt_storage: [`64`,`128`,`256`,`512`]
           
        },
        {
            iprodt_img: `iphone-xr.jpg`,
            iprodt_name: `iPhone-xr`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-XR , 64gb to 512gb storages available, add to your cart now`,
            iprodt_price: [1029.00,799.00],
            iprodt_colors: [`white`,`black`,`red`,`blue`,`yellow`,`coral`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-xs.jpg`,
            iprodt_name: `iPhone-xs`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-XR , 64gb to 512gb storages available, add to your cart now`,
            iprodt_price:[1000.00,899.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`white`,`black`,`rose gold`],
            iprodt_storage: [`32`,`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-11.jpg`,
            iprodt_name: `iPhone-11`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-11 , 64gb to 512gb storages available, add to your cart now`,
            iprodt_price: [1150.00,979.00],
            iprodt_ratings: 4.4,
            iprodt_colors: [`White`,`Black`,`Lilic`,`Lightyellow`,`Lightgreen`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-11pro.jpg`,
            iprodt_name: `iPhone-11pro`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-11Pro , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-12mini.jpg`,
            iprodt_name: `iPhone 12 mini`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-12 Mini , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price: [800.00,699.00],
            iprodt_colors: [`White`,`Black`,`Productred`,`Blue`,`Green`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iPhone-12Pro.jpg`,
            iprodt_name: `iPhone 12pro`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-12Pro , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iPhone-12-pro-max.jpg`,
            iprodt_name: `iPhone 12pro max`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-12Pro-Max , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Blue`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-SE-2.jpg`,
            iprodt_name: `iPhone SE-2`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-SE-2 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,599.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-SE-3.jpg`,
            iprodt_name: `iPhone SE-3`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-SE-3 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-9.jpg`,
            iprodt_name: `iPhone 9`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-9 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-8.jpg`,
            iprodt_name: `iPhone 8`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-8 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-8-plus.jpg`,
            iprodt_name: `iPhone 8-plus`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-8-Plus , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-7.jpg`,
            iprodt_name: `iPhone 7`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-7 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-7-plus.jpg`,
            iprodt_name: `iPhone 7-plus`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-7Plus , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-6.jpg`,
            iprodt_name: `iPhone 6`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-6 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-6s.jpg`,
            iprodt_name: `iPhone 6s`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-6S , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-5.jpg`,
            iprodt_name: `iPhone 5`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-5 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-5s.jpg`,
            iprodt_name: `iPhone 5s`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-5S , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-5c.jpg`,
            iprodt_name: `iPhone 5c`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-5C , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         },
         {
            iprodt_img: `iphone-4`,
            iprodt_name: `iPhone 4`,
            iprodt_link: `product .html`,
            iprodt_descrip: `iphone-4 , 64gb to 512gb storages available, add to your cart now.`,
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: [`Gold`,`Midnightgreen`,`Spacegray`,`Silver`],
            iprodt_storage: [`64`,`128`,`256`,`512`]
            
         }
    ]

    return (
       <Router>
          <switch>
              <Route exact path="/"><Products data = {productsAr} /></Route>
              <Route path="/product/:slug"><Product /></Route>
              <Route path="/404"><FourOhFour/></Route>
              <Redirect to="/404" />
          </switch>
        </Router>
      )
}
    
    export default App