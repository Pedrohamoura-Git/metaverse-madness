'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';

import { flexCenter } from '../../styles';

import { MetaverseBtn } from '../index';

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
      className={`${
        wasThisCardSelected()
          ? 'lg:relative lg:col-start-2 lg:col-end-8 lg:row-end-1 lg:mb-24'
          : `hover:cursor-pointer lg:col-span-2 lg:row-end-2`
      } lg:height-full relative gap-3 lg:static`}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onClick={() => updateSelectedWorld(id)}
      layout
      data-testid={`cards-wrapper-${index}`}
    >
      <img
        src={imgUrl}
        className={`${
          wasThisCardSelected()
            ? 'h-[320px] lg:w-full'
            : 'h-[70px] md:h-28 lg:w-full lg:rounded-b-none'
        }  w-full rounded-2xl object-cover duration-500`}
        data-testid='card-image'
      />
      <div
        className={`${
          wasThisCardSelected()
            ? 'h-48 md:flex md:h-28 md:items-center md:justify-between lg:bottom-0 lg:flex lg:h-1/4 lg:transform-none lg:items-center lg:justify-between'
            : `${flexCenter} h-9 lg:static lg:h-fit lg:w-auto lg:transform-none`
        } absolute bottom-0 w-full rounded-2xl bg-[rgba(0,0,0,0.5)] p-7 duration-700 lg:-mt-2.5 lg:-rotate-90 lg:gap-4 lg:rounded-t-none lg:py-7`}
      >
        {wasThisCardSelected() && (
          <>
            <MetaverseBtn styles='uppercase font-bold' />
          </>
        )}

        <p
          className={`${
            wasThisCardSelected()
              ? 'bottom-7 mt-6 ml-3 text-2xl md:static md:mt-0 lg:m-0'
              : 'bottom-[-10px] left-[50%] max-w-max -translate-x-2/4 -translate-y-2/4 lg:w-max lg:transform-none'
          } absolute text-lg font-bold duration-500 md:text-2xl lg:static lg:w-max`}
          data-testid='card-title'
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
