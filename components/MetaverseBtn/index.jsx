import React from 'react';

import { flexCenter } from '../../styles';

const MetaverseBtn = ({ color }) => {
  const applyButtonColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-[#25618B]';
      default:
        return 'glassmorphism bg-[rgba(255, 255, 255, 0.25)';
    }
  };

  return (
    <button
      className={`${flexCenter} mb-4 mt-6 flex h-[60px] w-max rounded-3xl p-3 md:my-0 lg:m-0 ${applyButtonColor()}`}
    >
      <img
        src='/headset.svg'
        alt='headset'
        className='mr-6 h-[30px] w-[30px]'
      />

      <p className='text-base font-bold text-left text-white uppercase'>
        Enter metaverse
      </p>
    </button>
  );
};

export default MetaverseBtn;
