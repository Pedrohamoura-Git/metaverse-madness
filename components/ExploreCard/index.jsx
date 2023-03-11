'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { TypingText } from '../../components';

import { fadeIn } from '../../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  selectedWorld,
  updateSelectedWorld,
}) => {
  const isThisCardSelected = () => !!(id === selectedWorld);

  return (
  <motion.button
    className='relative'
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    onClick={() => updateSelectedWorld(id)}
  >
    <img
      src={imgUrl}
      className={`${
          isThisCardSelected() ? 'h-[370px]' : 'h-[70px] md:h-[563px]'
        }  w-full rounded-2xl object-cover duration-500`}
    />
    <div className='absolute bottom-0 h-9 w-full rounded-2xl bg-[rgba(0,0,0,0.5)] md:bottom-0 md:flex md:flex-col md:justify-start'>
        {isThisCardSelected() && (
      <>
        <img
          src='/headset.svg'
          alt='headset'
          className='w-[60px] h-[60px] absolute left-[10%] bottom-[30%] -translate-x-1/4 -translate-y-2/4 rounded-full border-[18px] border-current'
        />
        <TypingText
          title='Enter metaverse'
          textStyles='uppercase text-white text-base font-bold mx-auto absolute bottom-[25%] left-[25%] -translate-x-2/4 -translate-y-2/4'
        />
      </>
    )}

    <p
      className={`${
            isThisCardSelected()
          ? 'bottom-[0%] left-[25%] -translate-x-1/4 -translate-y-2/4'
          : '-rotate-90 max-w-max bottom-[30%] left-[50%] -translate-x-2/4 -translate-y-2/4'
      } text-4xl font-bold absolute duration-500`}
    >
      {title}
    </p>
    </div>
  </motion.button>
);
};

export default ExploreCard;
