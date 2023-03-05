'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';

import { TitleText, TypingText } from '../../components/CustomTexts';

const GetStarted = () => {
  const [instructionsList] = useState([
    {
      id: 'id-1',
      description:
        'Find a world that suits you and you want to enter',
    },
    {
      id: 'id-2',
      description: 'Enter the world by reading basmalah to be safe',
    },
    {
      id: 'id-3',
      description:
        'No need to beat around the bush, just stay on the gas and have fun',
    },
  ]);

  return (
    <section className={`${styles.innerWidth} mx-auto text-white`}>
      <div
        className={`${styles.paddings} flex flex-col items-center justify-between lg:flex-row`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}
        <img
          src='/get-started.png'
          className='h-full max-h-[527.33px] w-full max-w-[461.32px]'
          alt=''
        />
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='max-w-md sm:w-full'
        >
          <TypingText
            title='| How Metaversus Works'
            textStyles='uppercase'
          />

          <TitleText
            title='Get started with just a few clicks'
            textStyles='mb-8'
          />

          <motion.ol
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
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
                  className='mb-[16px] flex items-center gap-4'
                  key={id}
                >
                  <span
                    className={`${styles.flexCenter} glassmorphism bold  mb- min-h-[60px] min-w-[60px] rounded-[24px] text-xl`}
                  >
                    {index <= 8 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className='text-[#B0B0B0]'>
                    {description}
                  </span>
                </motion.li>
              ),
            )}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
