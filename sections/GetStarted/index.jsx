'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import {
  staggerContainer,
  fadeIn,
  planetVariants,
} from '../../utils/motion';

import { TitleText, TypingText } from '../../components/CustomTexts';

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
    <section className={`${styles.innerWidth} mx-auto text-white`}>
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

          <motion.ol
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex max-w-4xl flex-col items-center gap-6'
          >
            {(instructionsList ?? []).map(
              ({ description, id }, index) => (
                <motion.li
                  variants={fadeIn(
                    'left',
                    'spring',
                    index * 0.5,
                    0.75,
                  )}
                  className='flex items-center gap-4'
                  key={id}
                >
                  <span
                    className={`${styles.flexCenter} glassmorphism bold min-h-[60px] min-w-[60px] rounded-3xl text-xl`}
                  >
                    {index <= 8 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className='max-w-sm text-lg text-[#B0B0B0]'>
                    {description}
                  </span>
                </motion.li>
              ),
            )}
          </motion.ol>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
