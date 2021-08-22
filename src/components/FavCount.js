import React, {useContext} from 'react'
import {FavContext, userMon}  from 'context/fav'

const FavCount = () => {
	console.log(`CartCount()`)
	
	const {data} = useContext(FavContext)
	const numItems = data.reduce((ttl, {count}) => ttl + count, 0) 
	
	return (
		<div style={{color:'black'}}>
			<span className="material-icons" aria-label="Favourites">favorite_border</span>
            <span>{Boolean(numItems) && numItems}</span>
		</div>
	)
}

export default FavCount