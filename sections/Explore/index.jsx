'use client';
import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { slideIn } from '../../utils/motion';
import { exploreWorlds } from '../../constants';

import { ExploreCard, TitleText, TypingText } from '../../components';

import { useState } from 'react';

const Explore = () => {
  const [selectedWorld, updateSelectedWorld] = useState('world-2');

  return (
    <motion.section
      variants={slideIn('left', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      className={`
        ${styles.paddings} ${styles.innerWidth} mx-auto flex
        flex-col align-center 2xl:max-w-[1100px] text-white
        `}
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

      <div className='flex align-center justify-center gap-x-8 mt-12'>
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            world={world}
            key={index}
            selectedWorld={selectedWorld}
            updateSelectedWorld={updateSelectedWorld}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Explore;
