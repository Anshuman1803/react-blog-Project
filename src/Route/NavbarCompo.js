import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarCompo() {

  // Changing the background color of navbar whenever user scroll down in website
  window.addEventListener("scroll", () => {
    let navBar = document.querySelector(".App-Nav")
    if (window.scrollY >= 55) {
      navBar.classList.add("stickeyNav")
    }
    if (window.scrollY === 0) {
      navBar.classList.remove("stickeyNav")
    }
  });

  const handleLinkClick = (e) => {
    let navBar = e.target.parentElement;
    let navMenuButton = document.querySelector(".navMenuButton");
    navMenuButton.classList.remove("fa-xmark");
    navBar.classList.remove("activeNav");
  }
  return (
    <nav className='App-Nav'>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/'>Home</NavLink>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/hollywood'>Hollywod</NavLink>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/bollywood'>Bollywood</NavLink>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/fitness'>Fitness</NavLink>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/technology'>Technology</NavLink>
      <NavLink onClick={handleLinkClick} className="App-Nav-Link" to='/sports'>Sports</NavLink>
    </nav>
  )
}

export default NavbarCompo
