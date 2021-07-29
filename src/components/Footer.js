import React from 'react'

const Footer = () => {
  return (
    
   <footer className="page-footer">
     <div className="main-footer">
       <nav  className="footer-nav">
          <ul className="page-nav">
            <li><a href="#" style={{color: 'black', textDecoration: 'underline'}}>Terms of Use</a></li>
            <li><a href="#" style={{color: 'black', textDecoration: 'underline'}}>Privacy Policy</a></li>
            <li><a href="#" style={{color: 'black', textDecoration: 'underline'}}>Accessibility Policy</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; Copyright, 1991.</p>
      </div>
    
    </footer>
  )
}

export default Footer