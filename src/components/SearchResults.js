import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'




const SearchResults = ({result}) => {


  const [currPage, setCurrPage] = useState(1)
  const pageSize = 6
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
    <section  id="productTable" className="results">
        <h2 className="subheading">Results</h2>

        <div id="iproducts">
          {theProducts}
        </div>

        <nav  className="pagination">
        <p id="numStudents" style={{backgroundColor: `lightgreen`}}>
        <button onClick={()=> updatePage(currPage-1)} disabled={(currPage === 1 )?`disabled`:``}>
          <span className="material-icons">navigate_before</span>
        </button>
        Showing {(theProducts.length === 1) ? `product` : `products`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
        <button onClick={()=> updatePage(currPage+1)} disabled={(currPage === totalPages )?`disabled`:``} >
          <span className="material-icons">navigate_next</span>
        </button>
        </p>
        <p className="pages">
          <Pagination defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)}
          
        /></p>
        </nav>
    </section>
  )
}

export default SearchResults