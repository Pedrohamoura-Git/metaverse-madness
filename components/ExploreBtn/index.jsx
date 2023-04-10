'use client';
import React from 'react';
import { motion } from 'framer-motion';

function ExploreBtn({
  href,
  linkClasses,
  imageAnimation,
  imageClasses,
}) {
  return (
    <a href={href} className={`${linkClasses}`}>
      <motion.img
        variants={imageAnimation}
        src='/stamp.png'
        alt='stamp'
        className={`h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px] ${imageClasses}`}
      />
    </a>
  );
}

export default ExploreBtn;
