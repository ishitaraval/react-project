import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {FavContext, userMon} from 'context/fav'
import ProductsContext from 'context/products'
import Item from 'components/Item'
import Image from 'components/Image'
import {Link} from 'react-router-dom'


const FavoritedItem = ({data,page_tit}) => {
	
	const fav = useContext(FavContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0


	return (
		<Layout page_title = {page_tit}>
				<ul>
					{ 
						(fav.length)
							? (fav.map(item => {

								let {id,  name, price} = products.find(prod => prod.id === item.id)
								subtotal += price[1] * item.count
								return <Link to={`/single_product/${id}`}>
												<Image src={photo} alt={name} ></Image> 
												<h2 className="cartProduct" key={item.id}><b>{name}</b> ({item.count} x {userMon(price[1])}) <b>= {userMon(price[1] * item.count)}</b></h2>
									   
											<Item key={item.id} data={item} className="addfav"/>
                                      </Link>
										}))
						: (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> )
					}
				</ul>
				<footer>
					{/* {Boolean(favi.length) && <div><button className="add-to-cart-btn">Check out {uMoney(subtotal)}</button></div>} */}
				</footer>
		</Layout>
	)
}



export default FavoritedItem