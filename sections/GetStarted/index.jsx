'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer, planetVariants } from '../../utils/motion';

import { TitleText, TypingText, StartSteps } from '../../components';

const GetStarted = () => {
  const [instructionsList] = useState([
    {
      id: 'instruction-1',
      description:
        'Find a world that suits you and you want to enter',
    },
    {
      id: 'instruction-2',
      description: 'Enter the world by reading basmalah to be safe',
    },
    {
      id: 'instruction-3',
      description:
        'No need to beat around the bush, just stay on the gas and have fun',
    },
  ]);

  return (
    <section className={`${styles.section}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} flex flex-col items-center justify-around gap-8 lg:flex-row`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}
        <motion.div variants={planetVariants('left')}>
          <img
            src='/get-started.png'
            className={`${styles.planetsDimensions}`}
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
