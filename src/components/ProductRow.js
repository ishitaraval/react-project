import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'components/Image'
import Item from 'components/Item'


const ProductRow = ({data}) => {
  const {id, photo, name, link,colors, descrip, price, ratings} = data
  
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

    const the_c = colors.map((col) => <li><label>{col}</label></li>)

return (
         <article className="iproducts">
            <Image src={photo} alt= {name} className="img-product"/>
            
             <div className="prod-details">
               <Link to={`/product/${id}`}><h3 id="filtername"><a href={link} >{name}</a></h3></Link>
               <data value={price}><del>${price[0]}</del> <ins>${price[1]}</ins></data>
               <p>{descrip}.</p>
               <fieldset>
                    <legend>Colors:</legend>
                    <ul>
                        {the_c}
                    </ul>
                    </fieldset>
               <dl>
                 <dt>Ratings(Above)</dt>
                   <dd>{the_r}</dd>
               </dl>
               <a href="#"style={{color: `lightseagreen`, textDecoration: `underline`}}>see more</a>
               <div className="product-cart">
                 <input type="button" id="addtocart"onClick={() => updater(id)} value="addtocart" className="add-cart"></input>
                 {/* <Item key={id} data={data} /> */}
                 <input type="button" id="fav" value="fav"></input>
               </div>
               </div>
           </article>
    )
}

export default ProductRow