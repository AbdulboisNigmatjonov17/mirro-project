import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({icon, text, num}) => {
  return (
    <button className='bg-[#3A5F56] rounded-[6px] w-[120px] h-[45px] text-white text-[16px] hover:bg-[#22866d]'>
      <FontAwesomeIcon icon={icon} /> {text} <span>{num}</span>
      </button>
  )
}

export default Button
