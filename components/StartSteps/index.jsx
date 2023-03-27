'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { flexCenter } from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';

const StartSteps = ({ stepsList }) => (
  <motion.ol
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className='flex max-w-4xl flex-col items-center gap-6'
  >
    {(stepsList ?? []).map(({ description, id }, index) => (
      <motion.li
        variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
        className='flex items-center gap-4'
        key={id}
      >
        <span
          className={`${flexCenter} glassmorphism bold min-h-[60px] min-w-[60px] rounded-3xl text-xl`}
        >
          {index <= 8 ? `0${index + 1}` : index + 1}
        </span>
        <span className='max-w-sm text-lg text-[#B0B0B0]'>
          {description}
        </span>
      </motion.li>
    ))}
  </motion.ol>
);

export default StartSteps;
