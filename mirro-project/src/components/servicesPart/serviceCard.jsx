import React from 'react'
import Data from '../servicesPart/data/servicesCardData'
import ButtonXicon from '../button/buttonXicon';

const ServiceCard = () => {
  return (
    <>
      {
        Data.map((item) => {
          return (
            <div key={item.id} className="card bg-[#F4F3F0] w-[380px] rounded-[16px] py-7 px-5 flex flex-col justify-between gap-4  items-start">
              <img src={item.img} alt="serviceDataImg" width={48}/>
              <h2 className='text-2xl text-[#3A5F56]'>{item.title}</h2>
              <p className='w-[300px]'>{item.description}</p>
              <ButtonXicon text={'Read more'}/>
            </div>
          );
        })
      }
    </>
  )
}

export default ServiceCard
