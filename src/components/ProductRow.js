import React from 'react'
import Image from 'components/Image'


const ProductRow = ({data}) => {
  const { iprodt_img, iprodt_name, iprodt_link, iprodt_descrip, iprodt_price, iprodt_ratings} = data

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

return (
        <article className="product">
            <Image src={iprodt_img} alt= {`${iprodt_name}`} className="img-product"/>
            
            <div className="prod-details">
              <h3 id="filtername"><a href={`${iprodt_link}`} >${iprodt_name}</a></h3>
              <data value="39"><del>$${iprodt_price[0]}</del> <ins>${iprodt_price[1]}</ins></data>
              <p>${iprodt_descrip}.</p>
             <dl>
               <dt>Rating</dt>
               <dd>${iprodt_ratings} <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
             </dl>
              <a href="#"style="color: lightseagreen; text-decoration: underline;">see more</a>
             <div className="product-cart">
             <input type="button" id="addtocart" value="addtocart"></input>
             <input type="button" id="fav" value="fav"></input>
             </div>
             </div>
        </article>
    )
}

export default ProductRow