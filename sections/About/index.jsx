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

    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ one: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col
        mx-auto`}
    >
    </motion.div>
  </section>
);

export default About;
