import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {CartContext, useMoney} from 'contexts/cart'
import ProductsContext from 'contexts/products'
import Image from 'components/Image'
// const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM

// FILE: pages/Checkout.js
const Checkout = () => {
	
	const cart = useContext(CartContext).data
	const products = useContext(ProductsContext).data
	let subtotal = 0
	
	return (
		<>
			<h2>Checkout</h2>
			<ul>
				{ 
					(cart.length)
						? (cart.map(item => {
								let {id,name, price} = products.find(prod => prod.id === item.id)
								subtotal += price[1] * item.count
								return <li key={item.id}><b>{name}</b> ({item.count} x {useMoney(price)}) <b>{useMoney(price * item.count)}</b></li> }))
						: (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> )
				}
			</ul>
			<footer>
				{Boolean(cart.length) && <div><em>(this does not do anything)</em> <button>Check out {useMoney(subtotal)}</button></div>}
			</footer>
		</>
	)
}
export default Checkout