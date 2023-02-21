'use client';
import React from 'react';
import styles from '../../styles';
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

    <a href='#explore'>
      <img
        src='/arrow-down.svg'
        alt='arrow-down'
        className='w-[32px] h-[32px] mx-auto mt-8'
      />
    </a>
  </section>
);

export default About;
