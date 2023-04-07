import React from 'react';

import { flexCenter } from '../../styles';

const MetaverseBtn = ({ color, styles }) => {
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
      className={`${flexCenter} mb-4 mt-6 flex h-[60px] w-max gap-3 rounded-[32px] p-4 md:my-0 lg:m-0 ${applyButtonColor()} ${styles}`}
    >
      <img
        src='/headset.svg'
        alt='headset'
        className='h-6 w-6 lg:h-[30px] lg:w-[30px]'
      />

      <p className='text-left text-base font-bold uppercase text-white'>
        Enter metaverse
      </p>
    </button>
  );
};

export default MetaverseBtn;
