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
  const [newsList] = useState([
    {
      id: 'news-1',
      title: 'A new world',
      img: 'vrpano.svg',
      description:
        'we have the latest update with new world for you to try never mind',
    },
    {
      id: 'news-2',
      title: 'More realistic',
      img: 'headset.svg',
      description:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
    },
  ]);

  return (
    <section className={`${styles.section}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} mx-auto flex w-full flex-col gap-8 lg:flex-row lg:items-center 2xl:max-w-[1280px]`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}

        <div className='flex flex-[0.95] flex-col justify-center'>
          <TypingText title='| Whats New?' />

          <TitleText title="What's new about Metaversus?" />

          <motion.ol
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex max-w-4xl flex-wrap justify-evenly gap-6 md:justify-around md:gap-4'
          >
            {(newsList ?? []).map(
              ({ id, title, img, description }, index) => (
                <motion.li
                  variants={fadeIn(
                    'right',
                    'spring',
                    index * 0.5,
                    0.75,
                  )}
                  className='flex min-w-[210px] flex-1 flex-col items-center sm:max-w-[250px] lg:items-baseline'
                  key={id}
                >
                  <div className='glassmorphism mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-3xl'>
                    <img
                      src={img}
                      alt={description}
                      className='w-h-6 h-6'
                    />
                  </div>
                  <h5 className='mb-4 text-2xl font-bold'>{title}</h5>
                  <p className='text-center text-lg text-[#B0B0B0] lg:text-left'>
                    {description}
                  </p>
                </motion.li>
              ),
            )}
          </motion.ol>
        </div>

        <motion.div variants={planetVariants('right')}>
          <img
            src='/whats-new.png'
            className={`${styles.planetsDimensions}`}
            alt=''
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
