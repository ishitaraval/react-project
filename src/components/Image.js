import React, { useState } from 'react'
import noImg from 'img/product.png'

const Image = ({src,alt}) => {
    let noImg
    const [img , setImg] = useState(``)

    import(`img/${src}`).then((image) => setImg(image.default))
    return(
        <img src={(img) ? img : noImg } alt={alt} className = "iprod_img"/>
    )
}

export default Image