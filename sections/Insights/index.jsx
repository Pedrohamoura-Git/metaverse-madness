'use client';

import React from 'react';
import { section, flexCenter } from '../../styles';

import { TitleText, TypingText, InsightCard } from '../../components';

import { insights } from '../../constants';

const Insights = () => (
  <section
    className={`${section} ${flexCenter} flex-col`}
    id='insights'
    data-testid='page-section'
  >
    <TypingText
      title='| Insight'
      textStyles='uppercase lg:text-center'
    />

    <TitleText title='Insight about metaverse' />

    <InsightCard insights={insights} />
  </section>
);

export default Insights;
