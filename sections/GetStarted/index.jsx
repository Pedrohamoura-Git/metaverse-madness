'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { startingFeatures } from '../../constants';

import {
  section,
  paddings,
  planetsDimensions,
  yPaddings,
} from '../../styles';
import { staggerContainer, planetVariants } from '../../utils/motion';

import { TitleText, TypingText, StartSteps } from '../../components';

const GetStarted = () => {
  return (
    <section className={`${section} ${yPaddings}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${paddings} z-10 flex flex-col items-center justify-around gap-8 lg:flex-row`}
        id='get-started'
        data-testid='page-section'
      >
        <motion.div variants={planetVariants('left')}>
          <img
            src='/get-started.png'
            className={`${planetsDimensions}`}
            alt=''
            data-testid='get-started-image'
          />
        </motion.div>

        <div className='class="flex justify-center" z-10 flex-[0.95] flex-col'>
          <TypingText
            title='| How Metaversus Works'
            textStyles='uppercase text-center'
          />

          <TitleText title='Get started with just a few clicks' />

          <StartSteps stepsList={startingFeatures} />
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
