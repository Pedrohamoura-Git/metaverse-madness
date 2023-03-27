'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';

const InsightCard = ({ insights }) => (
  <motion.ul variants={staggerContainer}>
    {(insights ?? []).map(({ id, imgUrl, title, subtitle }) => (
      <motion.li key={id}>
        <img src={imgUrl} alt={title} />
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </motion.li>
    ))}
  </motion.ul>
);

export default InsightCard;
