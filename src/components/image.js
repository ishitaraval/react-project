import React, {useState} from 'react'
import p_Img from 'img/iphone-x.jpg'

const image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)

  if (src) {
    import(`img/${src}`).then((image) => setImg(image.default))
  }

  return (
    <img src={(img) ? img : p_Img} alt={alt} {...attr} />
  )
}

export default image