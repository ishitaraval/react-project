import React, {useContext} from 'react'
import {FavContext}  from 'context/fav'


const FavItem= ({data}) => {
	console.log("Data for fav: ",data)
    const {id, name,price} = data
	const {data1, updater} = useContext(FavContext)

	
	return (
		<>
			<button onClick={() => updater(id, name)}
             type="button" className="addtofav">
             <span className="material-icons" aria-label="Favourites">favorite_border</span>
			</button>
		</>
	)
}

export default FavItem