'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../../utils/motion';

const NewFeatures = ({ featuresList }) => (
  <motion.ol
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className='flex max-w-4xl flex-wrap justify-evenly gap-6 md:justify-around md:gap-4'
  >
    {(featuresList ?? []).map(
      ({ id, title, imgUrl, subtitle }, index) => (
        <motion.li
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className='flex min-w-[210px] flex-1 flex-col items-center sm:max-w-[250px] lg:items-baseline'
          key={id}
        >
          <div className='glassmorphism mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-3xl'>
            <img
              src={imgUrl}
              alt={subtitle}
              className='w-h-6 h-6'
              data-testid='feature-image'
            />
          </div>
          <h5
            className='mb-4 text-2xl font-bold'
            data-testid='feature-title'
          >
            {title}
          </h5>
          <p
            className='text-center text-lg text-[#B0B0B0] lg:text-left'
            data-testid='feature-subtitle'
          >
            {subtitle}
          </p>
        </motion.li>
      ),
    )}
  </motion.ol>
);

export default NewFeatures;
