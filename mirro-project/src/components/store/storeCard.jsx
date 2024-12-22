import React from 'react'
import { storeData } from './store-data/storeData'
const StoreCard = () => {
  return (
    <>
     {
      storeData.map((item)=>{
        return(
          <div className="card bg-white w-[379px] rounded-xl">
            <img src={item.img} alt="storeCardImg" />
            <div className="storeCardContent flex flex-col gap-5 p-5">
              <h3 className='text-2xl'>{item.title}</h3>
              <p>{item.about}</p>
            </div>
          </div>
        )
      })
     } 
    </>
  )
}

export default StoreCard
