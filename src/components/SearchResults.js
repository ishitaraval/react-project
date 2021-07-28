import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
//import { Pagination } from 'antd';



const SearchResults = ({result}) => {


  const [currPage, setCurrPage] = useState(1)
  const pageSize = 3
  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)


    const theProducts = result.slice(startRow,endRow).map((product) => <ProductRow key={product.id} data={product} />)
    
   

  return (
    <section  id="productTable" className="results">
        <h2 className="subheading">Results</h2>

        <div id="iproducts">
          {theProducts}
        </div>

        
    </section>
  )
}

export default SearchResults