import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'components/Image'


const ProductRow = ({data}) => {
  const {id, photo, name, link, descrip, price, ratings} = data

    const article_pro = document.createElement('article')
    article_pro.classList.add("product")
    

    let the_r = []
    for (let x = 0; x < 5; x++) {
        if (ratings > x) {
            the_r.push(<span className="material-icons">star</span>)
        } else {
            the_r.push(<span className="material-icons">star_border</span>)
        }
    }

return (
         <article className="iproduct">
            <Image src={photo} alt= {name} className="img-product"/>
            
             <div className="prod-details">
               <Link to={`/product/${id}`}><h3 id="filtername"><a href={link} >{name}</a></h3></Link>
               <data value={price}><del>${price[0]}</del> <ins>${price[1]}</ins></data>
               <p>{descrip}.</p>
               <dl>
                 <dt>Rating</dt>
                   <dd>{the_r}<span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
               </dl>
               <a href="#"style={{color: lightseagreen, textDecoration: underline}}>see more</a>
               <div className="product-cart">
                 <input type="button" id="addtocart" value="addtocart" className="add-cart"></input>
                 <input type="button" id="fav" value="fav"></input>
               </div>
               </div>
           </article>
    )
}

export default ProductRow