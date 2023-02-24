'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ExploreCard = ({ world }) => (
  <motion.div className='relative'>
    <p>{world.id}</p>
    <img
      src={world.imgUrl}
      className='w-[170px] h-[563px] rounded-[24px] object-cover'
    />
    <p>{world.title}</p>
  </motion.div>
);

export default ExploreCard;
