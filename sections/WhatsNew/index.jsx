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
    <section className={`${styles.innerWidth} mx-auto text-white`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} flex flex-col items-center justify-around lg:flex-row`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}

        <div className='mb- max-w-md sm:w-full'>
          <TypingText title='| Whats New?' textStyles='uppercase' />

          <TitleText title="What's new about Metaversus?" />

          <motion.ol
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex w-max flex-wrap items-center'
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
                  className='mb-4'
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
                  <p className='text-[#B0B0B0] md:w-64'>
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
            className='h-full w-full lg:max-h-[580px] lg:max-w-[530px]'
            alt=''
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
