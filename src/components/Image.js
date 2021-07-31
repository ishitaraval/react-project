import React, { useState } from 'react'
import noImg from 'img/product.jpg'

const Image = ({src,alt}) => {
    
   // State will hold the image url
  const [img, setImg] = useState(``)
  //let img = null

  if (src) {
    import(`img/${src}`).then((image) => setImg(image.default))
    //img = require(`img/${src}`).default
  }

  return (
    <img src={(img) ? img : noImg} alt={alt} />
  )
}

export default Image