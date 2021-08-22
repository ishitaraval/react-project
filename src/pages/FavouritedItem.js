import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {FavContext} from 'context/fav'
import ProductsContext from 'context/products'
import Item from 'components/Item'
import Image from 'components/Image'
import {Link} from 'react-router-dom'


const FavouritedItem = ({data}) => {
	
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
								return  <div>
									<Link to={`/single_products/${id}`}>
								<Image src={photo} alt={name} style={{position:'center'}}></Image> 
								<div style={{textAlign:'center'}}> 
								<h3>{name}</h3>
								<h3>Item is added to Favourite</h3>
								</div>
							</Link>
							
							</div>}))
										
						: (<div><h3 style={{color:'red',fontSize:'20px'}}>No items in your cart, try going to SHOP </h3></div> )
					}
				</ul>
				<footer style={{marginTop:'28em'}}>
				
				</footer>
		</Layout>
	)
}



export default FavouritedItem