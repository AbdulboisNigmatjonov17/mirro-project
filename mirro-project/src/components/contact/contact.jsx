import React from 'react'
import Button from '../button/button'

const Contact = () => {
  return (
    <div className='contact w-full flex items-center justify-center h-[460px]'>
      <div className="contactPart w-[800px] h-[260px] flex items-center justify-between p-10 rounded-3xl bg-[#F4F3F0]">
        <p className='w-[310px] text-3xl text-[#292C32]'>Wan't to work together? Follow the link and let's get in touch.</p>
        <Button text={'Contact'}/>
      </div>
    </div>
  )
}

export default Contact
