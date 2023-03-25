'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';

import { TitleText, TypingText } from '../../components/CustomTexts';

const World = () => (
  <section className={`${styles.section}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} mx-auto flex w-full flex-col gap-8 lg:flex-row lg:items-center 2xl:max-w-[1280px]`}
    >
      <TypingText title='| People in the World' />
      <TitleText title='Track your friends and invite them to play together in the same world' />

      <motion.div className='relative h-[500px]'>
        <img
          src='/map.png'
          alt='world map'
          className='h-full w-full object-cover'
        />

        <img
          src='/people-01.png'
          alt='white-man'
          className='absolute bottom-24 left-1/3 h-14 w-14 rounded-full outline outline-4 outline-offset-2 outline-gray-500 md:left-[45%]'
        />
        <img
          src='/people-02.png'
          alt='white-woman'
          className='absolute top-[20%] left-1/4 h-14 w-14 rounded-full outline outline-4 outline-offset-2 outline-gray-500 md:left-[30%]'
        />
        <img
          src='/people-03.png'
          alt='black-man'
          className='absolute top-[15%] right-[8%] h-14 w-14 rounded-full outline outline-4 outline-offset-2 outline-gray-500 md:right-[12%]'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
