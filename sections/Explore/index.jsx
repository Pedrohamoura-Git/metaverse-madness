'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { ExploreCard, TitleText, TypingText } from '../../components';
const Explore = () => (
  <section
    className={`${styles.paddings} mx-auto flex flex-col align-center 2xl:max-w-[1100px] text-white`}
  >
    <motion.div
      variants={slideIn('down', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      className={`${styles.innerWidth} flex flex-col`}
    >
      <TypingText
        title='| The World'
        textStyles='uppercase mx-auto'
      />

      <h2
        className={`lg:text-[64px] md:text-[32px] sm:text-[28px] text-center leading-[80.64px]`}
      >
        Choose the world you want to{' '}
        <TypingText
          title='explore'
          textStyles='lg:text-[64px] md:text-[32px] sm:text-[28px] text-white'
        />
      </h2>
    </motion.div>
  </section>
);

export default Explore;
