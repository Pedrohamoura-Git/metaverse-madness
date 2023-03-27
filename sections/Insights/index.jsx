'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';

import { TitleText, TypingText, InsightCard } from '../../components';

const Insights = () => (
  <section className={`${styles.section}`}>
    <TypingText title='| Insight' />

    <TitleText title='Insight about metaverse' />

  </section>
);

export default Insights;
