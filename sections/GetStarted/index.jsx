'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { startingFeatures } from '../../constants';

import { section, paddings, planetsDimensions } from '../../styles';
import { staggerContainer, planetVariants } from '../../utils/motion';

import { TitleText, TypingText, StartSteps } from '../../components';

const GetStarted = () => {
  return (
    <section className={`${section}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${paddings} flex flex-col items-center justify-around gap-8 lg:flex-row`}
        id='get-started'
      >
        <motion.div variants={planetVariants('left')}>
          <img
            src='/get-started.png'
            className={`${planetsDimensions}`}
            alt=''
          />
        </motion.div>

        <div className='class="flex justify-center" flex-[0.95] flex-col'>
          <TypingText
            title='| How Metaversus Works'
            textStyles='uppercase lg:text-right'
          />

          <TitleText title='Get started with just a few clicks' />

          <StartSteps stepsList={startingFeatures} />
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
