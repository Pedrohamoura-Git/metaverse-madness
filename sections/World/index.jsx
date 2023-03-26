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
      <div>
        <TypingText title='| People in the World' />
        <TitleText title='Track your friends and invite them to play together in the same world' />
      </div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className='relative h-[500px]'
      >
        <motion.img
          variants={fadeIn('up', 'spring', 0.5, 1)}
          src='/map.png'
          alt='world map'
          className='h-full w-full object-cover'
        />
        <motion.ul
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.li
            variants={fadeIn('left', 'tween', 0.75, 0.75)}
            initial='hidden'
            whileInView='show'
            className='absolute bottom-24 left-1/3'
          >
            <img
              src='/white-man.png'
              alt='white man'
              className={`${styles.worldPeople}`}
            />
          </motion.li>
          <motion.li
            variants={fadeIn('left', 'tween', 1, 0.75)}
            initial='hidden'
            whileInView='show'
            className='absolute top-[20%] left-1/4'
          >
            <img
              src='/white-woman.png'
              alt='white woman'
              className={`${styles.worldPeople}`}
            />
          </motion.li>
          <motion.li
            variants={fadeIn('left', 'tween', 1.25, 0.75)}
            initial='hidden'
            whileInView='show'
          >
            <img
              src='/black-man.png'
              alt='black man'
              className={`${styles.worldPeople}`}
            />
          </motion.li>
          >
            <img
              src='/people-03.png'
              alt='black-man'
              className='h-14 w-14 rounded-full outline outline-4 outline-offset-2 outline-gray-500 md:right-[12%]'
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
