'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';

const FeedbackCards = ({ feedbacks }) => {
  return (
    <motion.ul
      variants={fadeIn('right', 'tween', 0.75, 0.75)}
      initial='hidden'
      whileInView='show'
      className='relative flex flex-col gap-8 lg:flex-[0.5]'
    >
      {feedbacks.length &&
        feedbacks.map(({ name, occupation, feedback }, index) => (
          <li key={name + index} className='rounded-3xl border p-4'>
            <div className='feedback-gradient'></div>
            <h5 className='text-2xl font-bold'>{name}</h5>
            <h6 className='mt-2 text-xs'>{occupation}</h6>

            <p className='mt-6 text-lg leading-9'>{feedback}</p>
          </li>
        ))}
    </motion.ul>
  );
};

export default FeedbackCards;
