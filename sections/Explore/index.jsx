'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { section, paddings, innerWidth } from '../../styles';
import { staggerContainer } from '../../utils/motion';
import { exploreWorlds } from '../../constants';

import { ExploreCard, TitleText, TypingText } from '../../components';

import { useState } from 'react';

const Explore = () => {
  const [selectedWorld, updateSelectedWorld] = useState('world-2');

  return (
    <section
      className={`
        ${section} ${paddings} 2xl:max-w-[1280px]
        `}
      id='explore'
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title='| The World'
          textStyles='uppercase mx-auto'
        />

        <TitleText
          title={
            <>
              Choose the world you want{' '}
              <br className='hidden md:block' /> to explore
            </>
          }
          textStyles='text-center'
        />

        <div className='flex min-h-[70vh] flex-col gap-5 sm:min-h-[30vh] md:mt-[50px] md:min-h-full lg:grid lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-2 lg:flex-row'>
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
