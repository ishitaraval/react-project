import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
import { Pagination } from 'antd';



const SearchResults = ({result}) => {


  const [currPage, setCurrPage] = useState(1)
  const pageSize = 3
  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)


    const theProducts = result.slice(startRow,endRow).map((product) => <ProductRow key={product.id} data={product} />)
    // console.log(theProducts)

  return (
    <section  id="productTable"className="results">
        <h2 className="subheading">Results</h2>

        <div id="iproducts">
          {theProducts}
        </div>

        {/* <!-- Navigation Section --> */}
        <nav aria-label="Pagination" className="pagination">
        <p><span>Showing  </span>  
           {theProducts.length} {(theProducts.length === 1) ? `product` : `products`} of {result.length}
        </p>
        <p className="pages"><Pagination defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)}
          
        /></p>
        </nav>
    </section>
  )
}

export default SearchResults