import React from 'react'
import Image from 'components/Image'


const ProductRow = ({data}) => {
  const {id, iprod_img, iprod_link, iprod_name, iprod_descrip, iprod_price, iprod_rating} = data

    const article_pro = document.createElement('article')
    article_pro.classList.add('product')
    

    let the_r = []
    for (let x = 0; x < 5; x++) {
        if (iprod_rating > x) {
            the_r.push(<span className="material-icons">star</span>)
        } else {
            the_r.push(<span className="material-icons">star_border</span>)
        }
    }

    const the_s = prod_storage.map((st) => <li><label><input type="radio" name="storage" value="s" key={id}/>{st}gb</label></li>)
    const the_c = prod_col.map((col) => <li><label><input type="radio" name="color" value="c"/>{col}</label></li>)



    
    return (
        <article className="product">
            <Image src={iprod_img} alt= {`${iprod_name}`}/>
            
            <div className="product-prop">
               <h3 id="filtername"><a href={iprod_link}>{iprod_name}</a></h3>
              <data value={iprod_price[1]}><del>${iprod_price[0]}</del> <ins>${iprod_price[1]}</ins></data>
              <p>"{iprod_descrip}."</p>
              <dl>
                 <dt>Rating</dt>
                     <dd>${iprod_rating} <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
              </dl>
              <a href="#"style={{color: 'blue', textDecoration: 'underline'}}>see more</a>
  
             <form className="product-prop">
                 <fieldset>
                     <legend>Colours</legend>
                     <ul className= "radio-btn" id = "filter-color">
                          ${the_c}
                     </ul>
                 </fieldset>
                 <fieldset>
                     <legend>Storage</legend>
                     <ol className= "radio-btn" id="filter-storage">
                          ${the_s}
                      </ol>
                 </fieldset>
             </form>
              <div className="product-list-cart">
                  <button type="button" id="addtocart" value="addtocart"><span className="material-icons">Add to Cart</span></button>
                 <button type="button" id="fav" value="fav"><span className="material-icons">favorite</span></button>
               </div>
           </div>
        </article>
    )
}

export default ProductRow