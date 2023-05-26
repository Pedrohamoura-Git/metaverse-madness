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
          <li
            key={name + index}
            className='rounded-3xl border p-4 md:h-80 md:p-8 lg:flex lg:h-[610px] lg:flex-col lg:justify-end'
          >
            <div className='feedback-gradient' />
            <h5
              className='text-2xl font-bold md:text-4xl'
              data-testid='feedback-name'
            >
              {name}
            </h5>
            <h6
              className='mt-2 text-xs md:text-lg'
              data-testid='feedback-occupation'
            >
              {occupation}
            </h6>

            <p
              className='mt-6 text-lg leading-9 md:text-2xl md:leading-10'
              data-testid='feedback-feedback'
            >
              {feedback}
            </p>
          </li>
        ))}
    </motion.ul>
  );
};

export default FeedbackCards;
