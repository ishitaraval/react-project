import React from 'react'
import Products from 'pages/Products'

const App = () => {

    const productAr =[
        {
           iprodt_img: 'iphone-x.jpg',
           iprodt_name: 'iPhone X',
           iprodt_link: 'product .html',
           iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
           iprodt_price: [1500.00,1319.00],
           iprodt_ratings: 4.4,
           iprodt_colors: ['white','black','rose gold'],
           iprodt_storage: ['64','128','256','512'],
           
        },
        {
            iprodt_img: 'iphone xr.jpg',
            iprodt_name: 'iPhone Xr',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: [1029.00,799.00],
            iprodt_colors: ['white','black','red','blue','yellow','coral'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-xs.jpg',
            iprodt_name: 'iPhone Xs',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1000.00,899.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['white','black','rose gold'],
            iprodt_storage: ['32','64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 11.jpg',
            iprodt_name: 'iPhone 11',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: [1150.00,979.00],
            iprodt_ratings: 4.4,
            iprodt_colors: ['White','Black','Lilic','Lightyellow','Lightgreen'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 11pro.jpg',
            iprodt_name: 'iPhone 11pro',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone 12 mini.jpg',
            iprodt_name: 'iPhone 12 mini',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price: [800.00,699.00],
            iprodt_colors: ['White','Black','Productred','Blue','Green'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iPhone12Pro.jpg',
            iprodt_name: 'iPhone 12pro',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-SE-2.jpg',
            iprodt_name: 'iPhone SE-2',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,599.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-SE-3.jpg',
            iprodt_name: 'iPhone SE-3',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-9.jpg',
            iprodt_name: 'iPhone 9',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-8.jpg',
            iprodt_name: 'iPhone 8',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-8-plus.jpg',
            iprodt_name: 'iPhone 8-plus',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-7.jpg',
            iprodt_name: 'iPhone 7',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-7-plus.jpg',
            iprodt_name: 'iPhone 7-plus',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-6.jpg',
            iprodt_name: 'iPhone 6',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-6s.jpg',
            iprodt_name: 'iPhone 6s',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-5.jpg',
            iprodt_name: 'iPhone 5',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-5s.jpg',
            iprodt_name: 'iPhone 5s',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-5c.jpg',
            iprodt_name: 'iPhone 5c',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         },
         {
            iprodt_img: 'iphone-4',
            iprodt_name: 'iPhone 4',
            iprodt_link: 'product .html',
            iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
            iprodt_price:[1550.00,1305.00], 
            iprodt_ratings: 4.4,
            iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
            iprodt_storage: ['64','128','256','512'],
            
         }
    ]

    return (
        <Products data={productAr} />
      )
    }
    
    export default App