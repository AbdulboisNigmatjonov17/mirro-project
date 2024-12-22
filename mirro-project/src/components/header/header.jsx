import React from 'react'
import Navbar from '../navbar/navbar'
import Hero from './assets/Hero.svg'
import Button from '../button/button'
const Header = () => {
  return (
    <>
      <div className="Container">
        <Navbar />
      </div>
      <div className="heroPart bg-[#F4F3F0] h-[975px] flex items-center">
        <div className="Container">
          <div className="hero w-[1280px] flex items-center justify-between">
            <div className="heroContent w-[550px] flex flex-col gap-[20px]">
              <h2 className='font-semibold text-[48px] text-[#3A5F56]'>Hi, I'm James Mirro & I'm a photographer.</h2>
              <p className='text-[#3A5F56]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <Button text='Read More' />
            </div>
            <img src={Hero} alt="heroImg" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Header
