'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { insightList, insightItem } from '../../styles';

const InsightCard = ({ insights }) => (
  <motion.ul
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`${insightList}`}
  >
    {(insights ?? []).map(
      ({ id, imgUrl, title, subtitle }, index) => (
        <motion.li
          key={id}
          className={`${insightItem}`}
          variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        >
          <img
            src={imgUrl}
            alt={title}
            className={`h-[250px] rounded-3xl object-cover md:h-[250px] md:w-[270px]`}
            data-testid='insight-image'
          />
          <div className='lg:w-[32rem]'>
            <h5
              className='mb-4 text-[26px] lg:text-4xl'
              data-testid='insight-title'
            >
              {title}
            </h5>
            <p className='text-sm' data-testid='insight-subtitle'>
              {subtitle}
            </p>
          </div>
          <a href='' className='hidden lg:block' target='_blank'>
            <img
              src='/arrow.svg'
              alt='button to enter'
              className='rounded-full border p-3 lg:h-20 lg:w-20'
            />
          </a>
        </motion.li>
      ),
    )}
  </motion.ul>
);

export default InsightCard;
