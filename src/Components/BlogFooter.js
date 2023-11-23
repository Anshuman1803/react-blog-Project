import React from 'react'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'
function BlogFooter() {
  return (
    <footer className='App-Footer'>

      <div className="Footer-col1 Footer-Col">
        <img src={Logo} alt="FooterLogo" className='FooterLogo' />
        <h1 ><p className='HeadingText'>The</p> Siren</h1>
      </div>

      <div className="Footer-col2 Footer-Col">
        <Link className='footerLinks' to={'/'}>HOME</Link>
        <Link className='footerLinks' to='blog/hollywood'>HOLLYWOOD</Link>
        <Link className='footerLinks' to='blog/bollywood'>BOLLYWOOD</Link>
        <Link className='footerLinks' to='blog/fitness'>FITNESS</Link>
        <Link className='footerLinks' to='blog/technology'>TECHNOLOGY</Link>
        <Link className='footerLinks' to='blog/sports'>SPORTS</Link>
      </div>

      <div className="Footer-col3 Footer-Col">
        <i className="fa-brands fa-facebook FooterSIcon"></i>
        <i className="fa-brands fa-instagram FooterSIcon"></i>
        <i className="fa-brands fa-github FooterSIcon"></i>
        <i className="fa-brands fa-stack-overflow FooterSIcon"></i>
        <i className="fa-brands fa-twitter FooterSIcon"></i>
        <i className="fa-brands fa-youtube FooterSIcon"></i>

      </div>

    </footer>
  )
}

export default BlogFooter
