import React from 'react'
import Content from '../content/content'
import StoreCard from './storeCard'
import ButtonXicon from '../button/buttonXicon'

const Store = () => {
  return (
    <div className='store bg-[#F4F3F0] my-10 py-3'>
      <div className="Container flex flex-col items-center gap-8">
        <Content text="Custom Red Text" color="customRed" />
        <div className="storeCards w-[100%] flex justify-between text-[#3A5F56]">
          <StoreCard />
        </div>
        <ButtonXicon text={'Preset store'} />
      </div>

    </div>
  )
}

export default Store
