const {useState, useContext, createContext} = React
const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM

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
								let {name, cost} = products.find(prod => prod.id === item.id)
								subtotal += cost * item.count
								return <li key={item.id}><b>{name}</b> ({item.count} x {useMoney(cost)}) <b>{useMoney(cost * item.count)}</b></li> }))
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