import React from 'react';
import ServiceLogo from '../../assets/secondLogo.svg';

const Content = ({ text, color }) => {
  return (
    <div>
      <div className="serviceContent flex flex-col items-center justify-center w-[600px] text-center gap-[20px] my-8">
        <img src={ServiceLogo} alt="serviceLogo" />
        <h2 className={`text-${color} text-[32px]`}>{text}</h2>
        <p className="text-[#292C32] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
        </p>
      </div>
    </div>
  );
};


export default Content