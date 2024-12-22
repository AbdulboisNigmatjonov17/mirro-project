import React from 'react'
import Logo from "../../assets/Logo.svg"
import Button from '../button/button'
const Navbar = () => {
  return (
    <nav className='h-[10vh] flex justify-between items-center'>
      <img src={Logo} alt="navLogo" width={115}/>
      <div className="navContact flex items-center gap-[30px]">
        <ul className='flex gap-[15px]'>
          <li><a href="#">Presets</a></li>
          <li><a href="#">Prints</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <Button icon='fa-solid fa-cart-shopping' text='cart' num={0}/>
      </div>
    </nav>
  )
}

export default Navbar
