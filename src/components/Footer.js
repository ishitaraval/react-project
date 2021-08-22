import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer className="footer">
    <ul className="legal">
        <li><Link to="/">Terms of Use</Link></li> 
        <li><Link to="/">Privacy Policy</Link></li> 
        <li><Link to="/">Accessibility</Link></li> 
    </ul>
  </footer>
  )
}

export default Footer