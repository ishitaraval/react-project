const {useState, useContext, createContext} = React
const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM
const CartCount = () => {
	console.log(`CartCount()`)
	
	const {data} = useContext(CartContext)
	const numItems = data.reduce((ttl, {count}) => ttl + count, 0) // Total the "count"
	
	return (
		<div>
			<i class="fas fa-shopping-cart"></i> <span>{Boolean(numItems) && numItems}</span>
		</div>
	)
}
export default CartCount