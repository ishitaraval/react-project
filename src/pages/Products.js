import React, {useState} from 'react'
import Layout from 'components/Layout'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {
  const [searchState, setSearchState] = useState({
    minPrice: 0.0,
    query:``,
   cols: [],
    stores: [],
    phonerating: 0.0,
    sort: (a, b) => a.price[1] - b.price[1]
  })

  // For convenience, destructure all of the values into local variables
  const {minPrice,query,cols, stores, phonerating, sort} = searchState

  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const searchResult = data
.filter(({price}) => price[1] >= minPrice)
.filter(({ratings}) => ratings >= phonerating || ratings === 0 ) 
.filter(({name}) => name.toUpperCase().includes(query.toUpperCase()))
 .filter(({colors}) => cols.length === 0 || 
                      colors.filter((col) => cols.includes(col)).length > 0)
.filter(({storage}) => stores.length === 0 || 
                     storage.filter((store) => stores.includes(store)).length > 0) 
.sort(sort)  

const handlePriceChange = (event) => {
   setSearchState({
    ...searchState,
    minPrice: Number(event.target.value),
  })
}

const handleQueryChange = (event) => {
  //setQuery(event.target.value)

  setSearchState({
    ...searchState,
    query: event.target.value
  })
}


                                  
const handleColorChange = ({target}) => {
  if (target.checked) {
    setSearchState({
      ...searchState,
      cols: [...searchState.cols, target.value]
    })
    console.log(cols)
  } else {
    setSearchState({
      ...searchState,
      cols: searchState.cols.filter((col) => col !== target.value)
    })
  }
}  

const handleStorageChange = ({target}) => {
    
  if (target.checked) {
    setSearchState({
      ...searchState,
      stores: [...searchState.stores, target.value]
    })
    console.log(stores)
  } else {
    setSearchState({
      ...searchState,
      stores: searchState.stores.filter((store) => store !== target.value)
    })
  }
}  

// Product filter for rating
const onRatingChange = (event) => {
  setSearchState({
    ...searchState,
    phonerating: event.target.value
  })
}

// Filter for Sorting
const handleSortChange = ({target}) => {
  let sorting
  if (target.value === "0") {
    sorting = (a, b) => a.price[1] - b.price[1]
  } else if (target.value === "1") {
    sorting = (a, b) => b.price[1] - a.price[1]
  }

  setSearchState({
    ...searchState,
    sort: sorting
  })
}
console.log(searchState)
return (
 <Layout>
    <h2 style={{paddingTop: '140px'}}>Filters</h2>
   
    <div className="filters">
      <div>
       <form className="product-prop">
          <fieldset>
            <legend>Price:</legend>
            <input type="range" name="price"  id="filterPrice" value={minPrice} min="699.00" max="1319.00" step="1"  onChange={handlePriceChange}/>
            <output htmlFor="filterPrice" style={{fontSize: '1.2em'}}> {minPrice.toFixed(1)}</output>
          </fieldset>
          
          <fieldset id="filterColor" onChange={handleColorChange}>
            <legend>Colors:</legend>
            <ul className="filter-list">
              <li><input type="checkbox"name="filter-col" value="black" id="blackcol"/> 
                <label htmlFor="blackcol">Black</label>
              </li>
              <li><input type="checkbox"  name="filter-col" value="white" id="whitecol"/> 
                <label htmlFor="whitecol">White</label>
              </li>
              <li><input type="checkbox"  name="filter-col" value="midnightgreen" id="midnightgreencol"/>
                <label htmlFor="midnightgreencol">Midnight green</label>
              </li>
              <li><input type="checkbox"   name="filter-col" value="pacificblue" id="pacificbluecol"/> 
                <label htmlFor="pacificbluecol">Pacific blue</label>
              </li>
              <li><input type="checkbox"  name="filter-col" value="rosegold" id="rosegoldcol"/> 
                <label htmlFor="rosegoldcol">Rose Gold</label>
              </li>
            </ul>
          </fieldset>
          <fieldset id="filterStorage"  onChange={handleStorageChange} >
            <legend>Storage:</legend>
            <ul className="filter-list">
              <li>
                <input type="checkbox" name="filter-store" value="32" id="32"/> 
                <label htmlFor="32">32 gb</label>
              </li>
              <li>
                <input type="checkbox" name="filter-store" value="64" id="64"/> 
                <label htmlFor="64">64 gb</label>
              </li>
              <li>
                <input type="checkbox" name="filter-store" value="128" id="128"/> 
                <label htmlFor="128">128 gb</label>
              </li>
              <li>
                <input type="checkbox" name="filter-store" value="256" id="256"/> 
                <label htmlFor="256">256 gb</label>
              </li>
              <li>
                <input type="checkbox" name="filter-store" value="512" id="512"/>
                <label htmlFor="512">512 gb</label>
              </li>
            </ul>
          </fieldset>
         
          <fieldset id="rating" onChange={onRatingChange}>
            <legend>Ratings:</legend>
           <ul className="filter-list" style={{color: 'lightgoldenrodyellow'}}>
             <li>
               <input type="radio" name="rating" value="4" id="four"/>
               <label htmlFor="four" className="rating">
                 <span className="material-icons">star</span><span className="material-icons" >star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
               </label>
             </li>
             <li>
                <input type="radio" name="rating" value="3" id="three"/>
                <label htmlFor="three" className="rating">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
             </li>
             <li>
                <input type="radio" name="rating" value="2" id="two"/>
                <label htmlFor="two" className="rating">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
             </li>
              <li>
                <input type="radio" name="rating" value="1" id="one"/>
                <label htmlFor="one" className="rating">
                  <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
        
      <label htmlFor="sort"style={{color:"black"}}>Sort by: </label>
        <select name="sort" id="sortBy" className="sort-list" defaultValue="0" onChange={handleSortChange}>
         <option value="0">price, lowest to highest</option>
         <option value="1">price, highest to lowest</option>
       </select>
       
    </div>
    
    <SearchResults result={searchResult}/>
 </Layout>
  )
}

export default Products