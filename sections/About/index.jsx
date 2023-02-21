'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { TypingText } from '../../components/CustomTexts';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = () => (
  <section
    className={`${styles.paddings} lg:text-[32px] md:text-[24]
      2xl:max-w-[1100px] w-full mx-auto flex flex-col align-center relative
      sm:text-[16] text-[14] lg:leading-[57.6px] md:leading-[40px]
      sm:leading-[30px] leading-[24.4px] font-sans text-center uppercase
      text-[#C7C7C7]
    `}
  >
    <div className='gradient-02 z-0' />

    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ one: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col
        mx-auto`}
    >
      <TypingText
        title='| About Metaversus'
        textStyles='text-center'
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='z-10'
      >
        <span className='font-bold text-white'>Metaverse</span> is a
        new thing in the future, where you can enjoy the virtual
        world, live new experiences, create new memories and discover
        new worlds, because this is the new reality in the{' '}
        <span className='font-bold text-white'>
          madness of the metaverse.
        </span>{' '}
        Using only <span className='fo nt-bold text-white'>VR</span>
        devices you can easily explore the metaverse the way you want
        and turn your dreams into reality. Let's{' '}
        <span className='font-bold text-white'>explore</span> the
        madness of the metaverse by scrolling down
      </motion.p>

      <motion.a
        variants={fadeIn('up', 'tween', 0.4, 1)}
        href='#explore'
      >
        <img
          src='/arrow-down.svg'
          alt='arrow down'
          className='w-[32px] h-[32px] mx-auto mt-8'
        />
      </motion.a>
    </motion.div>
  </section>
);

export default About;
