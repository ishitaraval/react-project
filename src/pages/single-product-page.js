import React, {useState, useContext} from 'react'
import ProductsContext from 'context/products'
import Layout from 'components/Layout'
import Image from 'components/Image'
import Item from 'components/Item'
import FavItem from 'components/FavItem'
import 'css/singleproductdetails.css'
import {useParams} from 'react-router-dom'


const Single_product = ({data, page_tit}) => {
  const products = useContext(ProductsContext)
  console.log("DAta:",products)
  const {slug} = useParams()
  console.log("slug1:",slug);
  const {id, photo, name,colors,storage, price, ratings} = products.find(product => product.id === slug)
  const prod = products.find(product => product.id === slug)
  console.log("slug:",slug);

  let the_r = []
  for (let x = 0; x < 5; x++) {
      if (ratings > x) {
          the_r.push(<span className="material-icons">star</span>)
      } else {
          the_r.push(<span className="material-icons">star_border</span>)
      }
  }

  const the_store = storage.map((store) => <li><label><input type="radio" name="storage" value="s" key={id}/>{store}</label></li>)
  const the_color = colors.map((col) => <li><label><input type="radio" name="color" value="c"/>{col}</label></li>)

  return (
    <Layout page_title = {page_tit}>
          {/* MAIN PRODUCT SECTION  */}
        <article className="single-product">
          <section className="prod-images">
            <div className="prod-main-pic">
              <Image src={photo} alt={name} id="main_pic" />
            </div>
          </section>

          <section className="prod-summary">
              <div className="prod-details" style={{marginTop:'10em', color: 'black',marginLeft:'5em'}}>
                  <h3>{name}</h3> <h3>{id}</h3>
                  <p>Here is a shot of this product that might entice a user to click and add it to their cart. <a href="#">see more</a></p>
                  <dl className="rating">
                  <data value={price[1]}><del>${price[0]}</del> <ins>${price[1]}</ins></data>
                    <dd><p>Rating : {ratings}</p>
                    {the_r}</dd>
                  </dl>
                  <a href="#"  style={{color:'lightseagreen',textDecoration:`underline`}}>see more</a>
                 <div>
                   {/* <button type="button" id="addtocart" value="addtocart"><span className="material-icons">add_shopping_cart</span> Add to Cart</button> */
                   }
                   <Item key={id} data={prod }  /> 
                   {/* <button type="button"><span className="material-icons">favorite</span></button> */}
                    <FavItem key={id} data={prod } />
                 </div>
                 <div className="EMI">
                   <h4><strong>EMI</strong> starts at $67.09. No cost EMI available</h4>
                 <a href="#" style={{color:'lightseagreen',textDecoration:`underline`}}>Emi options</a>
                 <h4>Order it now.</h4>
                 <h4>Sold by <a href= "#"style={{color:'lightseagreen',textDecoration:`underline`}}>Appario Retail Private Ltd</a> and
                  <a href="#"style={{color:'lightseagreen',textDecoration:`underline`}}>Fulfiled By iStore</a></h4>
                 <p>Product will be delivered in 7-8 business days</p>


                  <form className="iterm-properties">
                    <fieldset>
                      <legend>Category</legend>
                        <ul>
                          {the_color}
                        </ul>
                    </fieldset>
                    <fieldset>
                      <legend>Sizes</legend>
                        <ol className="weight">
                          {the_store}
                        </ol>
                    </fieldset>
                    <section className="prod-description">
                    <h3>Description</h3>
                    <ul className = "pro-det">
                      <li><strong>Brand:</strong>   Apple</li>
                      <li><strong>Memory Storage:</strong>  256gb</li>
                      <li><strong>Operating System:</strong>  iOS</li>
                      <li><strong>Screen size:</strong>  5.8 inches</li>
                    </ul>
                 </section>
                  </form>
                  {/* <div className="prodcut-list-cart">
                    <Item key={id} data={prd } />
                    <FavItem  key={id} data={prd } />
                  </div> */}
                </div>

                </div>
          </section>
        </article>


    </Layout>
  )



}

export default  Single_product