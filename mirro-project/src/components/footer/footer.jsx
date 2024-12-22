import React from 'react'
import Logo from '../../assets/whiteLogo.svg'
import { footerData } from './data/footerData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-[#292C32] h-[780px] flex items-center'>
      <div className="Container h-[580px] flex flex-col justify-between">
        <div className="img w-full flex justify-center">
          <img src={Logo} alt="Logo" width={160} />
        </div>
        <div className="footerContent flex justify-between">
          <div className="ulPart grid grid-cols-3 gap-x-10">
            {
              footerData.map((item) => {
                return (
                  <ul key={item.id}>
                    <li className='text-[#B87D58]'>{item.title}</li>
                    <li><a href="#">{item.li1}</a></li>
                    <li><a href="#">{item.li2}</a></li>
                    <li><a href="#">{item.li3}</a></li>
                    <li><a href="#">{item.li4}</a></li>
                    <li><a href="#">{item.li5}</a></li>
                    <li><a href="#">{item.li6}</a></li>
                    <li><a href="#">{item.li7}</a></li>
                  </ul>
                )
              })
            }
          </div>
          <div className="footerContact flex flex-col gap-3">
            <h3 className='text-[#B87D58]'>Newsletter</h3>
            <p className='text-white'>Subscribe to my newsletter where I share news about upcoming printings and preset sales.</p>
            <form className='flex'>
            <input type="email" placeholder='Email address' className='py-1 px-2 rounded-l-md' /><button className='text-white bg-black rounded-r-md py-1 px-2'>Submit</button>
            </form>
          </div>
        </div>
        <div className="bottomPart flex justify-between text-white">
          <p>© Mirro Photography, LLC. All rights reserved. Powered by <span>Webflow</span></p>
          <div className="icons flex gap-4 ">
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
            <FontAwesomeIcon icon={faSquareFacebook} size='2x' />
            <FontAwesomeIcon icon={faInstagram} size='2x' />
            <FontAwesomeIcon icon={faTwitter} size='2x' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
