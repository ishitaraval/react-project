import React from 'react'
import Product from 'Products/Product'

const App = () => {

    const productAr =[
        {
           iprodt_img: 'iphone-x.jpg',
           iprodt_name: 'iPhone X',
           iprodt_link: 'product .html',
           iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
           iprodt_price: {prev:1500.00,sale:1319.00 },
           iprodt_ratings: 4.4,
           iprodt_colors: ['white','black','rose gold'],
           iprodt_storage: ['64','128','256','512'],
           
        },
        {
            iprodt_img: 'iphone xr.jpg',
            iprodt_name: 'iPhone Xr',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: {prev:1029.00,sale:799.00},
            iprodt_colors: ['white','black','red','blue','yellow','coral'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-xs.jpg',
            iprodt_name: 'iPhone Xs',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:{prev:1000.00,sale:899.00 }, 
            iprodt_ratings: 4.4,
            iprodt_colors: ['white','black','rose gold'],
            iprodt_storage: ['32','64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 11.jpg',
            iprodt_name: 'iPhone 11',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: {prev:1150.00,sale:979.00},
            iprodt_ratings: 4.4,
            iprodt_colors: ['White','Black','Lilic','Lightyellow','Lightgreen'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 11pro.jpg',
            iprodt_name: 'iPhone 11pro',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:{prev:1550.00,sale:1305.00 }, 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 12 mini.jpg',
            iprodt_name: 'iPhone 12 mini',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: {prev:800.00, sale:699.00 },
            iprodt_colors: ['White','Black','Productred','Blue','Green'],
            iprodt_storage: ['64','128','256','512'],
            
         }
    ]

    return (
        <Product data={productAr} />
      )
    }
    
    export default App