import React, {useContext} from 'react'
import {CartContext, useMoney} from 'context/cart'


const Item = ({data}) => {
	// console.log("data:",data);
	
	const {id, photo, name, link, descrip, price, ratings} = data
	console.log("data:",data);
	console.log(descrip);
	const {data1, updater} = useContext(CartContext)
	console.log("data:1",data1);
	
	return (
		<>
		<li><b>{name}</b> 
		<button	type="button" id="addtocart" onClick={() => updater(id, name)} value="addtocart" className="add-cart"></button>
		</li>
		</>
	)
}
export default Item