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
      className={`${flexCenter} mb-4 mt-6 flex h-[60px] w-max gap-3 rounded-[32px] py-4 px-6 md:my-0 lg:m-0 ${applyButtonColor()} ${styles}`}
    >
      <img src='/headset.svg' alt='headset' className='h-6 w-6' />

      <p className='text-left text-base text-white'>
        Enter metaverse
      </p>
    </button>
  );
};

export default MetaverseBtn;
