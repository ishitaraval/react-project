import React from 'react'
import Image from 'components/Image'


const ProductRow = ({data}) => {
  const { iprodt_img, iprodt_name, iprodt_link, iprodt_descrip, iprodt_price, iprodt_ratings,iprodt_colors,iprodt_storage} = data

    const article_pro = document.createElement('article')
    article_pro.classList.add('product')
    

    let the_r = []
    for (let x = 0; x < 5; x++) {
        if (iprodt_ratings > x) {
            the_r.push(<span className="material-icons">star</span>)
        } else {
            the_r.push(<span className="material-icons">star_border</span>)
        }
    }

    const the_store = iprodt_storage.map((store) => <li><label><input type="radio" name="storage" value="s" key={id}/>{store}gb</label></li>)
    const the_color = iprodt_colors.map((col) => <li><label><input type="radio" name="colour" value="c"/>{col}</label></li>)



    
    return (
        <article className="product">
            <Image src={iprodt_img} alt= {`${iprodt_name}`}/>
            
            <div className="product-prop">
               <h3 id="filtername"><a href={iprodt_link}>{iprodt_name}</a></h3>
              <data value={iprodt_price[1]}><del>${iprodt_price[0]}</del> <ins>${iprodt_price[1]}</ins></data>
              <p>"{iprodt_descrip}."</p>
              <dl>
                 <dt>Rating</dt>
                     <dd>${the_r} <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
              </dl>
              <a href="#"style={{color: 'blue', textDecoration: 'underline'}}>see more</a>
  
             <form className="product-prop">
                 <fieldset>
                     <legend>Colours</legend>
                     <ul className= "radio-btn" id = "filter-color">
                          ${the_color}
                     </ul>
                 </fieldset>
                 <fieldset>
                     <legend>Storage</legend>
                     <ol className= "radio-btn" id="filter-storage">
                          ${the_store}
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