'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { section, innerWidth, paddings } from '../../styles';
import { fadeIn } from '../../utils/motion';
import { TitleText, MetaverseBtn } from '../index';

const Footer = () => (
  <footer className={`relative ${section}`}>
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 0.75)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${innerWidth} ${paddings} `}
      id='footer'
    >
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <TitleText
          title='Enter the Metaverse'
          textStyles='!text-left mb-5 md:w-max md:p-0 md:mb-5'
        />

        <MetaverseBtn color='blue' styles='mt-0' />
      </div>

      <div className='mt-8 mb-12 border-b-2 opacity-20' />

      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <p className='text-2xl font-extrabold uppercase leading-5'>
          Metaversus
        </p>
        <p className='text-sm opacity-50'>
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>

        <div className='flex gap-4'>
          <a href='#' target='_blank'>
            <img
              src='/twitter.svg'
              alt='twitter-icon'
              className='h-6 w-6'
            />
          </a>
          <a href='#' target='_blank'>
            <img
              src='/linkedin.svg'
              alt='linkedin-icon'
              className='h-6 w-6'
            />
          </a>
          <a href='#' target='_blank'>
            <img
              src='/instagram.svg'
              alt='instagram-icon'
              className='h-6 w-6'
            />
          </a>
          <a href='#' target='_blank'>
            <img
              src='/facebook.svg'
              alt='facebook-icon'
              className='h-6 w-6'
            />
          </a>
        </div>
      </div>

      <div className='footer-gradient absolute bottom-0 right-0' />
    </motion.div>
  </footer>
);

export default Footer;
