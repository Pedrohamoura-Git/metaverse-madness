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
    <section
      className={`
        ${styles.paddings} ${styles.innerWidth} mx-auto flex
        flex-col align-center 2xl:max-w-[1100px] text-white
        `}
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

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
};

export default Explore;
