'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ExploreCard = ({
  world,
  selectedWorld,
  updateSelectedWorld,
}) => (
  <motion.button
    className='relative'
    onClick={() => updateSelectedWorld(world.id)}
  >
    <img
      src={world.imgUrl}
      className={`${
        world.id === selectedWorld ? 'w-[370px]' : 'w-[170px]'
      } h-[563px] rounded-[24px] object-cover duration-500`}
    />

    <p
      className={`${
        world.id === selectedWorld
          ? 'bottom-[0%] left-[25%] -translate-x-1/4 -translate-y-2/4'
          : '-rotate-90 max-w-max bottom-[30%] left-[50%] -translate-x-2/4 -translate-y-2/4'
      } text-4xl font-bold absolute duration-500`}
    >
      {world.title}
    </p>
  </motion.button>
);

export default ExploreCard;
