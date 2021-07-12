window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.menu');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//  Toggle the product filters to show when button is click
const filt_toggle = document.querySelector(`.filt-toggle`)
const filters = document.querySelector(`.filters`)

try {
  filt_toggle.addEventListener('click',function () {
    if (filters.classList.contains(`m-hide`)) {
      filters.classList.remove('m-hide')
    } else {
      filters.classList.add('m-hide')
    }
  })
}
catch(err) {
  console.log("Error message: "+err.message)
}

//  Toggle the product filters to show when button is click
const nav_toggle = document.querySelector(`.nav-toggle`)
const navigation = document.querySelector(`.navigation`)
nav_toggle.addEventListener('click',function () {
  if (navigation.classList.contains(`m-hide`)) {
    navigation.classList.remove('m-hide')
    navigation.classList.add('nav_style')
  } else {
    navigation.classList.remove('nav_style')
    navigation.classList.add('m-hide')
  }
})

const productAr =[
    {
       iprodt_img: 'iphone-x.jpg',
       iprodt_name: 'iPhone X',
       iprodt_link: 'product .html',
       iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
       iprodt_price: [1500.00,1319.00 ],
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
        iprodt_price:[1550.00,1305.00 ], 
        iprodt_ratings: 4.4,
        iprodt_colors: ['Gold','Midnightgreen','Spacegray','Silver'],
        iprodt_storage: ['64','128','256','512'],
        
     },
     {
        iprodt_img: 'iphone 12 mini.jpg',
        iprodt_name: 'iPhone 12 mini',
        iprodt_link: 'product .html',
        iprodt_descrip: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
        iprodt_price: [800.00, 699.00],
        iprodt_colors: ['White','Black','Productred','Blue','Green'],
        iprodt_storage: ['64','128','256','512'],
        
     }
]

const productsTable= document.querySelector('#iproducts')


let prevProductsAr = []

const setProductsTable = function(product_array){

 try{productsTable.innerHTML = ``
   
 product_array.forEach((iproducts) => {
 const article_pro = document.createElement('article')
 const colors= iproducts.iprodt_colors
 const storages = iproducts.iprodt_storage

 let col=[]
 colors.forEach((cols) => {
  col += `<li><label><input type="radio" name="colour" value="rose gold"> ${cols} </label></li>`
 })

let store=[]
 storages.forEach(function(storage){
 // console.log(storage)
  store += `<li><label><input type="radio" name="storage" value="512">${storage}  gb</label></li>`
 })

 article_pro.classList.add('product')

 article_pro.innerHTML = 
 `<img src="img/${iproducts.iprodt_img}" alt="${iproducts.iprodt_name}">
 <div class="prod-details">
   <h3 id="filtername"><a href="${iproducts.iprodt_link}">${iproducts.iprodt_name}</a></h3>
   <data value="39"><del>$${iproducts.iprodt_price.prev}</del> <ins>${iproducts.iprodt_price.sale}</ins></data>
   <p>"${iproducts.iprodt_descrip}."</p>
  <dl>
    <dt>Rating</dt>
    <dd>${iproducts.iprodt_ratings} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
  </dl>
   <a href="#"style="color: lightseagreen; text-decoration: underline;">see more</a>

   <form class="product-prop">
     <fieldset>
       <legend>Colours</legend>
       <ul class= "radio-btn" id = "filter-color">
           ${col}
       </ul>
       </fieldset>
     <fieldset>
      <legend>Storage</legend>
      <ol class= "radio-btn" id="filter-storage">
           ${store}
      </ol>
    </fieldset>
  </form>
  <div class="prodcut-list-cart">
    <button type="button" id="addtocart" value="addtocart"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
    <button type="button" id="fav" value="fav"><span class="material-icons">favorite</span></button>
  </div>
  </div>
 `
  productsTable.appendChild(article_pro)
})

}
catch(err) {
    console.log("Error message: "+err.message)
  }
  
}
     
 
setProductsTable(productAr)

const filterPrice = document.querySelector(`#filterPrice`)
filterPrice.addEventListener(`change`, function(event){
  const theRange = event.target
  const  theOutput= document.querySelector(`output[for="filterPrice"]`)
    theOutput.textContent = theRange.value
    const filteredproducts = productAr.filter(function(iproducts){
       if(iproducts.iprodt_price.sale >= Number(theRange.value)){
         return true
       }else{
         return false
       }
    })
    setProductsTable(filteredproducts) 
})

const addToCart = document.querySelector(`#addtocart`)
addToCart.addEventListener(`click`,function(event){
  const whichOne = event.target
  if(whichOne.value === `addtocart`){
    window.confirm("Added to Cart");
  }
})

addToCart.addEventListener(`click`, decisionMade)

const filterAndSort = function() {
    // Do all the filtering, then print the list
    // filter() is a loop that includes/excludes values from an array to build a new array
    //    If the callback function returns true, the value is added to the new array
    //    If the callback function returns false, the value is NOT added to the new array
  
    // console.log(searchFilter.rating)
  
    const filteredArray = productsAr.filter((product) => searchFilter.rating == product.iprodt_ratings || searchFilter.rating === 0) 
                                    .filter((product) => searchFilter.colors.length === 0 || 
                                                         product.iprodt_colors.filter((col) => searchFilter.catergories.includes(col)).length > 0)
                                    .filter((product) => searchFilter.storage.length === 0 || 
                                                          product.iprodt_storage.filter((store) => searchFilter.weight.includes(store)).length > 0) 
                                    .sort(searchFilter.sort)           
  
    // Go build the UI with the new filtered array
    // setStudentToTable(filteredArray)
    setProductsTable(filteredArray)
  
  }
  
  // Product color filter
  const filterColor = document.getElementById(`filterColor`)
  filterColor.addEventListener(`change`, function(event) {
  
    // A few ways to gather all of the companion elements with the same "name"
    // const theCourses = document.querySelectorAll(`[name="${event.target.name}"]`)
    // const theCourses = event.target.closest(`fieldset`).elements
    const thecolor= event.target.form.elements[event.target.name]
  
    // Filter to only the checked ones, then return the "value" of those to an array
    searchFilter.colors = [...thecolor]
                              .filter((col) => col.checked)
                              .map((col) => col.value)
    console.log(searchFilter.colors)     
    filterAndSort()
  })
  
  // Product storage filter
  const filterStorage = document.getElementById(`filterStorage`)
  filterStorage.addEventListener(`change`, function(event){
  
    const theStorage = event.target.form.elements[event.target.name]
    searchFilter.storage = [...theStorage]
                          .filter((storage) => storage.checked)
                          .map((storage) => {
                            st = storage.value
                            return parseInt(st)
                          })
    console.log(searchFilter.storage)
    filterAndSort()
  })
  
  // Product filter for rating
  const filterRating = document.getElementById(`rating`)
  filterRating.addEventListener(`change`, function(event) {
    
    const ratings = event.target.form.elements[event.target.name]
    searchFilter.rating = ratings.value
  
    console.log(searchFilter.rating)
    filterAndSort()
  })
  
  // Filter for Sorting
  const sortBy = document.getElementById(`sortBy`)
  sortBy.addEventListener(`change`, function(event) {
    
    if (event.target.value === "0") {
      searchFilter.sort = (a, b) => a.iprodt_price[1] - b.iprodt_price[1]
      console.log(event.target.value)
      // console.log(b.prod_prices[1] )
    } else if (event.target.value === "1") {
      searchFilter.sort = (a, b) => b.iprodt_price[1] - a.iprodt_price[1]
      console.log(searchFilter.sort)
    }
  
    filterAndSort()
  })