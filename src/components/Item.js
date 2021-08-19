const {useState, useContext, createContext} = React
const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM
const Item = ({data: {id, name, cost}}) => {
	console.log(`Item()`)
	
	const {data, updater} = useContext(CartContext)
	
	return (
		<li><b>{name}</b> {useMoney(cost)}{` `}
			<button onClick={() => updater(id)}>Add to Cart</button>
		</li>
	)
}
export default Item