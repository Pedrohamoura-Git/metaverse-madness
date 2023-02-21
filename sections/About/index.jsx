'use client';
import React from 'react';
const About = () => (
  <section
    className='font-sans text-center lg:text-[32px] md:text-[24]
  sm:text-[16] text-[14] lg:leading-[57.6px] md:leading-[40px]
  sm:leading-[30px] leading-[24.4px] uppercase text-[#C7C7C7]
  2xl:max-w-[1100px] w-full mx-auto flex flex-col align-center relative'
  >
    <p className='z-10'>
      <span className='font-bold text-white mr-3'>Metaverse</span>
      is a new thing in the future, where you can enjoy the virtual
      world, live new experiences, create new memories and discover
      new worlds, because this is the new reality in the
      <span className='font-bold text-white mx-3'>
        madness of the metaverse.
      </span>
      Using only <span className='font-bold text-white mx-3'>VR</span>
      devices you can easily explore the metaverse the way you want
      and turn your dreams into reality. Let's
      <span className='font-bold text-white mx-3'>explore</span> the
      madness of the metaverse by scrolling down
    </p>

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
