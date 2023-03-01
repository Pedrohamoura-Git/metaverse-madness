'use client';
import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';
import { exploreWorlds } from '../../constants';

import { ExploreCard, TitleText, TypingText } from '../../components';

import { useState } from 'react';

const Explore = () => {
  const [selectedWorld, updateSelectedWorld] = useState('world-2');

  return (
    <section
      className={`
        ${styles.paddings} ${styles.innerWidth} mx-auto flex
        flex-col align-center 2xl:max-w-[1280px] text-white
        `}
      id='explore'
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title='| The World'
          textStyles='uppercase mx-auto'
        />

        <TitleText
          title={
            <>
              Choose the world you want{' '}
              <br className='md:block hidden' /> to explore
            </>
          }
          textStyles='text-center'
        />

        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              {...world}
              index={index}
              key={world.id}
              selectedWorld={selectedWorld}
              updateSelectedWorld={updateSelectedWorld}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
