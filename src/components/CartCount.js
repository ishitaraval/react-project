import React, {useContext} from 'react'
import {CartContext, useMoney} from 'context/cart'
const CartCount = () => {
	console.log(`CartCount()`)
	
	const {data} = useContext(CartContext)
	const numItems = data.reduce((ttl, {count}) => ttl + count, 0) // Total the "count"
	
	return (
		<div style={{color: 'black'}}>
			<span className="material-icons" aria-label="Items in your cart" >shopping_cart</span> <span>{Boolean(numItems) && numItems}</span>
		</div>
	)
}
export default CartCount