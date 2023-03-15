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
        className={`${styles.paddings} 2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}

        <div className='flex-[0.95] flex justify-center flex-col'>
          <TypingText title='| Whats New?' />

          <TitleText title="What's new about Metaversus?" />

          <motion.ol
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-wrap justify-evenly lg:justify-between gap-[24px]'
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
                  className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] items-center lg:items-baseline'
                  key={id}
                >
                  <div className='glassmorphism mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-3xl'>
                    <img
                      src={img}
                      alt={description}
                      className='h-6 w-h-6'
                    />
                  </div>
                  <h5 className='mb-4 text-2xl font-bold'>{title}</h5>
                  <p className='text-[#B0B0B0] text-lg text-center lg:text-left'>
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
            className='h-full w-full md:max-h-[390px] md:max-w-[390px] m-auto'
            alt=''
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
