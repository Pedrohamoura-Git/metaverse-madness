'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';

const InsightCard = ({ insights }) => (
  <motion.ul
    variants={staggerContainer}
    className={`${styles.insightList}`}
  >
    {(insights ?? []).map(({ id, imgUrl, title, subtitle }) => (
      <motion.li key={id} className={`${styles.insightItem}`}>
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
    ))}
  </motion.ul>
);

export default InsightCard;
