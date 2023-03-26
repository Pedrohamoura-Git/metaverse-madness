'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`mb-2 text-[14px] font-normal text-secondary-white
    ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={`span-${letter + index}`}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles, slot }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mb-14 p-3 text-center text-[40px] font-bold text-white md:mb-24 md:p-5 md:text-[64px] ${textStyles} max-w-[950px]`}
  >
    {title}
    {slot !== undefined && { slot }}
  </motion.h2>
);
