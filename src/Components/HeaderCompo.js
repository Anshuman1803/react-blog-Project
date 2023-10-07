import React from 'react'

function HeaderCompo() {

  let showNav = () => {
    let navBar = document.querySelector(".App-Nav");
    let navMenuButton = document.querySelector(".navMenuButton");
    navBar.classList.toggle("activeNav");
    navMenuButton.classList.toggle("fa-xmark");
  }

  return (
    <header className='App-Heading'>
      <h1 ><p className='HeadingText'>The</p> Siren</h1>
      <i className="fa-solid fa-bars navMenuButton" onClick={showNav}></i>
    </header>
  )
}

export default HeaderCompo
