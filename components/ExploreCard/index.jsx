'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { TypingText } from '../../components';

import styles from '../../styles';
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

  return (
    <motion.div
      className='relative'
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onClick={() => updateSelectedWorld(id)}
    >
      <img
        src={imgUrl}
        className={`${
          wasThisCardSelected()
            ? 'h-[370px]'
            : 'h-[70px] md:h-[563px]'
        }  w-full rounded-2xl object-cover duration-500`}
      />
      <div
        className={`${
          wasThisCardSelected() ? 'h-56' : 'h-9'
        } absolute bottom-0 w-full rounded-2xl bg-[rgba(0,0,0,0.5)] p-7 duration-700 md:bottom-0 md:flex md:flex-col md:justify-start`}
      >
        {wasThisCardSelected() && (
          <>
            <div
              className={`${styles.flexCenter} bg-[rgba(255, 255, 255, 0.25) glassmorphism mb-4 h-[60px] w-[60px] rounded-3xl`}
            >
              <img
                src='/headset.svg'
                alt='headset'
                className='h-[30px] w-[30px]'
              />
            </div>
            <button className='text-left text-base font-bold uppercase text-white'>
              Enter metaverse
            </button>
          </>
        )}

        <p
          className={`${
            wasThisCardSelected()
              ? 'mt-6 text-2xl'
              : 'bottom-[-10px] left-[50%] max-w-max -translate-x-2/4 -translate-y-2/4 md:bottom-[30%] md:-rotate-90'
          } absolute text-lg font-bold duration-500 md:text-4xl`}
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
