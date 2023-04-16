'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { section, paddings, worldPeople } from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';

import { TitleText, TypingText } from '../../components/CustomTexts';

const World = () => (
  <section className={`${section}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${paddings} mx-auto flex w-full flex-col gap-8 lg:items-center 2xl:max-w-[1280px]`}
      id='world'
    >
      <div>
        <TypingText title='| People in the World' />
        <TitleText
          title='Track your friends and invite them to play together in the same world'
          textStyles='max-w-[950px]'
        />
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
            className='absolute bottom-24 left-[20%] md:left-[35%] lg:left-[40%]'
          >
            <img
              src='/white-man.png'
              alt='white man'
              className={`${worldPeople}`}
            />
          </motion.li>
          <motion.li
            variants={fadeIn('left', 'tween', 1, 0.75)}
            initial='hidden'
            whileInView='show'
            className='absolute -top-[5%] left-[5%] md:left-[30%] lg:left-[35%]'
          >
            <img
              src='/white-woman.png'
              alt='white woman'
              className={`${worldPeople}`}
            />
          </motion.li>
          <motion.li
            variants={fadeIn('left', 'tween', 1.25, 0.75)}
            initial='hidden'
            whileInView='show'
            className='absolute top-[5%] -right-[5%] md:right-[5%] lg:right-[21%]'
          >
            <img
              src='/black-man.png'
              alt='black man'
              className={`${worldPeople}`}
            />
          </motion.li>

          <motion.li
            variants={fadeIn('left', 'tween', 1.5, 0.75)}
            initial='hidden'
            whileInView='show'
            className='hidden md:absolute md:-left-[10%] md:top-[10%] md:block lg:left-0'
          >
            <img
              src='/world-billboard-1.png'
              alt='upside down billboard'
            />
          </motion.li>
          <motion.li
            variants={fadeIn('left', 'tween', 1.75, 0.75)}
            initial='hidden'
            whileInView='show'
            className='hidden md:absolute md:-right-[10%] md:top-[15%] md:block lg:right-0'
          >
            <img
              src='/world-billboard-2.png'
              alt='Hawkins Labs billboard'
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
