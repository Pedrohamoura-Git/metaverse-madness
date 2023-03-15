'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white
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
    className={`mt-[8px] mb-24 text-[40px] text-center font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
    {slot !== undefined && { slot }}
  </motion.h2>
);
