import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {CartContext, useMoney} from 'context/cart'
import ProductsContext from 'context/products'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
// const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM

// FILE: pages/Checkout.js
const Checkout = ({data}) => {
	
	const cart = useContext(CartContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0
	
	return (
		 <Layout>
			<h2>Checkout</h2>
			<ul>
				{ 
					(cart.length)
						? (cart.map(item => {
								let {id,name, price} = products.find(prod => prod.id === item.id)
								console.log("checkout item price:",price[1]);
								subtotal += price[1] * item.count
								return <Link to={`/single_product/${id}`}>
								<Image src={photo} alt={name} ></Image> 
								<h2 className="cartProduct" key={item.id}><b>{name}</b> ({item.count} x {useMoney(price[1])}) <b>= {useMoney(price[1] * item.count)}</b></h2>
							</Link>}))
						: (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> )
				}
			</ul>
			<footer>
				{Boolean(cart.length) && <div><em>(this does not do anything)</em> <button className="addtocart">Check out {useMoney(subtotal)}</button></div>}
			</footer>
		</Layout>
	)
}
export default Checkout