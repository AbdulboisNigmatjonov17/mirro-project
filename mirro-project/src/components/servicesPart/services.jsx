import React from 'react'
import ServiceCard from './serviceCard'
import Content from '../content/content'
const Services = () => {
  return (
    <>
      <div className="Container flex flex-col gap-[50px] items-center">
        <Content text="Services" color="customGreen" />

        <div className="serviceCards w-[100%] grid grid-cols-3 justify-between gap-y-[20px]">
          <ServiceCard />
        </div>
      </div>
    </>
  )
}

export default Services
