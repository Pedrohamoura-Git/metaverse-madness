'use client';
import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { exploreWorlds } from '../../constants';
import { ExploreCard, TitleText, TypingText } from '../../components';
  return (
    <section
      className={`${styles.paddings} mx-auto flex flex-col align-center 2xl:max-w-[1100px] text-white`}
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

    </section>

export default Explore;
