'use client';

import React from 'react';
import { section, flexCenter } from '../../styles';

import { TitleText, TypingText, InsightCard } from '../../components';

import { insights } from '../../constants';

const Insights = () => (
  <section
    className={`${section} ${flexCenter} flex-col`}
    id='insights'
  >
    <TypingText title='| Insight' />

    <TitleText title='Insight about metaverse' />

    <InsightCard insights={insights} />
  </section>
);

export default Insights;
