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
          />
          <div>
            <h5 className='text-[26px]'>{title}</h5>
            <p className='text-sm'>{subtitle}</p>
          </div>
        </motion.li>
      ),
    )}
  </motion.ul>
);

export default InsightCard;
