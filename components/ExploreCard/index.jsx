'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { flexCenter } from '../../styles';
import { fadeIn } from '../../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  selectedWorld,
  updateSelectedWorld,
}) => {
  const wasThisCardSelected = () => !!(id === selectedWorld);

  // TODO: Since it's not possible to animate grid transition, I have to think of a way to simulate the transition with transform

  return (
    <motion.div
      className={`${
        wasThisCardSelected()
          ? 'lg:relative lg:col-start-2 lg:col-end-4 lg:row-end-1 lg:mb-24'
          : 'lg:row-end-2'
      } lg:height-full relative gap-3 lg:static`}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onClick={() => updateSelectedWorld(id)}
    >
      <img
        src={imgUrl}
        className={`${
          wasThisCardSelected()
            ? 'h-[370px] lg:w-full'
            : 'h-[70px] md:h-28 lg:w-full lg:rounded-b-none'
        }  w-full rounded-2xl object-cover duration-500`}
      />
      <div
        className={`${
          wasThisCardSelected()
            ? 'h-48 md:flex md:h-28 md:items-center md:justify-between lg:bottom-0 lg:flex lg:h-1/4 lg:transform-none lg:items-center lg:justify-between'
            : 'h-9 lg:static lg:h-fit lg:w-auto lg:transform-none'
        } absolute bottom-0 w-full rounded-2xl bg-[rgba(0,0,0,0.5)] p-7 duration-700 lg:-mt-2.5 lg:-rotate-90 lg:rounded-t-none lg:py-7 `}
      >
        {wasThisCardSelected() && (
          <>
            <button
              className={`${flexCenter} bg-[rgba(255, 255, 255, 0.25) glassmorphism mb-4 mt-6 flex h-[60px] w-max rounded-3xl p-3 md:my-0 lg:m-0`}
            >
              <img
                src='/headset.svg'
                alt='headset'
                className='mr-6 h-[30px] w-[30px]'
              />

              <p className='text-left text-base font-bold uppercase text-white'>
                Enter metaverse
              </p>
            </button>
          </>
        )}

        <p
          className={`${
            wasThisCardSelected()
              ? 'bottom-7 mt-6 ml-3 text-2xl md:static md:mt-0 lg:m-0'
              : 'bottom-[-10px] left-[50%] max-w-max -translate-x-2/4 -translate-y-2/4 lg:w-max lg:transform-none'
          } absolute text-lg font-bold duration-500 md:text-3xl lg:static lg:w-max`}
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
