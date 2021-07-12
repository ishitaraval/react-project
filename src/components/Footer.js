import React from 'react'

const Footer = () => {
  return (
    
    <footer className="page-footer">
    <div className="main-footer">
         <nav aria-label="Legal" class="footer-nav">
          <ul className="legal">
            <li><a href="#" style="color: black; text-decoration: underline;">Terms of Use</a></li>
            <li><a href="#" style="color: black; text-decoration: underline;">Privacy Policy</a></li>
            <li><a href="#" style="color: black; text-decoration: underline;">Accessibility Policy</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; Copyright, 1991.</p>
      </div>
    
    </footer>
  )
}

export default Footer