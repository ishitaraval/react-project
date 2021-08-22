import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {FavContext, userMon} from 'context/fav'
import ProductsContext from 'context/products'
import Item from 'components/Item'
import Image from 'components/Image'
import {Link} from 'react-router-dom'


const FavoritedItem = ({data}) => {
	
	const fav = useContext(FavContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0


	return (
		<Layout>
			<h2 style={{marginTop:'5em'}}>Favourite</h2>
				<ul>
					{ 
						(fav.length)
							? (fav.map(item => {

								let {id, photo, name, price} = products.find(prod => prod.id === item.id)
								subtotal += price[1] * item.count
								return <div><Link to={`/single_products/${id}`}>
												<Image src={photo} alt={name} ></Image> 
												<h2 className="cartProduct" key={item.id}><b>{name}</b> ({item.count} x {userMon(price[1])}) <b>= {userMon(price[1] * item.count)}</b></h2>
									   
											
                                      </Link>
									  <Item key={item.id} data={item} className="addfav"/>
									  </div>
										}))
						: (<div><h3 style={{color:'red',fontSize:'20px'}}>No items in your cart, try going to SHOP </h3></div> )
					}
				</ul>
				<footer style={{marginTop:'28em'}}>
					
				</footer>
		</Layout>
	)
}



export default FavoritedItem