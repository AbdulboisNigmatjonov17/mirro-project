import React from 'react'
import nextIcon from '../../assets/nextIcon.svg'

const ButtonXicon = ({text}) => {
  return (
    <button className='text-[#3A5F56] flex items-center gap-2'>{text} <img src={nextIcon} alt="nextIcon" /></button> 
  )
}

export default ButtonXicon
