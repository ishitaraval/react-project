import React, {useState} from 'react'
import Layout from 'components/Layout'
// import SearchFilter from 'components/SearchFilter'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {

  const [searchState, setSearchState] = useState({
    colors: [],
    storage: [],
    rating: 0,
    sort: (a, b) => a.iprodt_price[1] - b.iprodt_price[1]
  })

  // For convenience, destructure all of the values into local variables
  const {colors, storage, rating, sort} = searchState

  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const filteredArray = data.filter(({iprodt_ratings}) => rating == iprodt_ratings || rating === 0 ) 
                                  .filter(({iprodt_colors}) => colors.length === 0 || 
                                  iprodt_colors.filter((col) => colors.includes(col)).length > 0)
                                  .filter(({iprodt_storage}) => storage.length === 0 || 
                                  iprodt_storage.filter((store) => storage.includes(store)).length > 0) 
                                  .sort(sort)  

// Product category filter
const onColorChange = ({target}) => {
  if (target.checked) {
    setSearchState({
      ...searchState,
      colors: [...searchState.colors, target.value]
    })
  } else {
    setSearchState({
      ...searchState,
      colors: searchState.catergories.filter((color) => color !== target.value)
    })
  }
}  

// Product weight filter
const onStorageChange = ({target}) => {
    const st = parseInt(target.value)
  if (target.checked) {
    setSearchState({
      ...searchState,
      storage: [...searchState.storage, st]
    })
    console.log(storage)
  } else {
    console.log(`nothing`)
    setSearchState({
      ...searchState,
      storage: searchState.weight.filter((store) => store !== st)
    })
  }
}  

// Product filter for rating
const onRatingChange = (event) => {
  setSearchState({
    ...searchState,
    rating: event.target.value
  })
}

// Filter for Sorting
const handleSortChange = ({target}) => {
  let sorting
  if (target.value === "0") {
    sorting = (a, b) => a.iprodt_price[1] - b.iprodt_price[1]
  } else if (target.value === "1") {
    sorting = (a, b) => b.iprodt_price[1] - a.iprodt_price[1]
  }

  setSearchState({
    ...searchState,
    sort: sorting
  })
}

return (
 <Layout>
  
   <aside className="sidebar">
  
       
       <form className="filters">
         <h2>Filters</h2>

        <div className="filter-options" id="sort">
           <form action="" className="form-cont"></form>
              <fieldset id="filter-price">
                 <p>Price:</p>
                 <input type="range" name="price" id="filterPrice" value="0" min="699.00" max="1319.00" step="1"/>
                 <output htmlFor="filterPrice"> $0.00</output>
              </fieldset>
              <fieldset id="filter-color" onChange={onColorChange}>
                 <legend>Colors</legend>
                 <ul class="filter-list">
                    <li><input type="checkbox" className="check"  name="filter-col" value="black" id="black"className="checkbox.hide"/> 
                        <label  htmlFor="black"><div className="control-check"></div>Black</label>
                    </li>
                    <li><input type="checkbox" className="check"  name="filter-col" value="white" id="white"className="checkbox.hide"/> 
                        <label htmlFor="white"><div className="control-check"></div>White</label>
                    </li>
                    <li><input type="checkbox" className="check"  name="filter-col" value="midnightgreen" id="midnight green" className="checkbox.hide"/>
                        <label htmlFor="midnight green"><div className="control-check"></div>Midnight green</label>
                    </li>
                    <li><input type="checkbox" className="check"  name="filter-col" value="pacificblue" id="pacific blue" className="checkbox.hide"/> 
                        <label htmlFor="pacific blue"><div className="control-check"></div>pacific blue</label>
                    </li>
                    <li><input type="checkbox" className="check"  name="filter-col" value="rosegold" id="rose gold" className="checkbox.hide"/> 
                        <label htmlFor="rose gold"><div className="control-check"></div>Rose Gold</label>
                   </li>
                  </ul>
             </fieldset>
              <fieldset id="filter-storage"  onChange={onStorageChange}>
                 <legend>Storage</legend>
                 <ol class="filter-list">
                     <li>
                         <input type="checkbox" name="filter-store" value="32" id="32" className="checkbox.hide"/> 
                        <label htmlFor="32"><div className="control-check"></div>32 gb</label>
                     </li>
                     <li>
                         <input type="checkbox" name="filter-store" value="64" id="64" className="checkbox.hide"/> 
                         <label htmlFor="64"><div className="control-check"></div>64 gb</label>
                     </li>
                     <li>
                         <input type="checkbox" name="filter-store" value="128" id="128" className="checkbox.hide"/> 
                         <label htmlFor="128"><div className="control-check"></div>128 gb</label>
                     </li>
                      <li>
                         <input type="checkbox" name="filter-store" value="256" id="256" className="checkbox.hide"/> 
                         <label htmlFor="256"><div className="control-check"></div>256 gb</label>
                      </li>
                      <li>
                         <input type="checkbox" name="filter-store" value="512" id="512" className="checkbox.hide"/>
                         <label htmlFor="512"><div className="control-check"></div>512 gb</label>
                      </li>
                 </ol>
              </fieldset>
              <fieldset id="rating" onChange={onRatingChange}>
                 <legend>Ratings (above)</legend>
                 <ol className="filter-list">
                     <li>
                          <input type="radio" name="rating" value="4" id="aboveFour" className="checkbox.hide" />
                          <label htmlFor="aboveFour" className="rating">
                          <span className="material-icons">star</span><span className="material-icons" >star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
                          <div className="control-check"></div>
                         </label>
                     </li>
                      <li>
                          <input type="radio" name="rating" value="3" id="aboveThree" className="checkbox.hide" />
                          <label htmlFor="aboveThree" className="rating">
                          <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                           <div className="control-check"></div>
                         </label>
                     </li>
                      <li>
                         <input type="radio" name="rating" value="2" id="aboveTwo" className="checkbox.hide" />
                         <label htmlFor="aboveTwo" className="rating">
                         <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                         <div className="control-me"></div>
                         </label>
                     </li>
                     <li>
                         <input type="radio" name="rating" value="1" id="aboveOne" className="radio.hide" />
                         <label htmlFor="aboveOne" className="rating">
                          <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                          <div className="control-me"></div>
                         </label>
                     </li>
                 </ol>
             </fieldset>
             </div>
             <fieldset>
                 <label htmlFor="sort">Sort by</label>
                 <select name="sort" id="sortBy" class="filter-list" onChange={handleSortChange}>
                     <option value="0" selected>price, lowest to highest</option>
                     <option value="1">price, highest to lowest</option>
                 </select>
              </fieldset>
           </form>
       
    </aside>
 <SearchResults result={filteredArray} />

 </Layout>
  )
}

export default Products