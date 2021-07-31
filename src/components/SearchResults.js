import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'




const SearchResults = ({result}) => {

  const [currPage, setCurrPage] = useState(1)
  const pageSize = 3

  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)

  const theProducts = result.slice(startRow,endRow).map((product) => <ProductRow key={product.id} data={product} />)
    
    const updatePage = (page) => {
      if (page < 0) 
        setCurrPage(1)
      else if (page > totalPages) 
        setCurrPage(totalPages)
      else 
        setCurrPage(page)
    }

  return (
    <div id="productTable" className="results" style={{backgroundColor: 'lightsteelblue', padding: `1em`}}>
      <h2 style= {{color:'white', textAlign: 'center'}}>Results</h2>
      
      <div id="iproducts">
        {(theProducts.length) ? theProducts : `No matching products`}
      </div>

      
      <p id="numProducts" style={{backgroundColor: `lightgreen`}}>
       <button onClick={()=> updatePage(currPage-1)} disabled={(currPage === 1 )?`disabled`:``}>
         <span className="material-icons">navigate_before</span>
       </button>
       Showing {(theProducts.length === 1) ? `product` : `products`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
        <button onClick={()=> updatePage(currPage+1)} disabled={(currPage === totalPages )?`disabled`:``} >
          <span className="material-icons">navigate_next</span>
        </button>
      </p>
      
      <Pagination current={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} />
      
        
    </div>
  )
}

export default SearchResults