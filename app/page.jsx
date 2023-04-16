import React from 'react';
import { Footer, Navbar, ScrollBar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

import { yPaddings } from '../styles';

const Page = () => (
  <div className='body-wrapper overflow-hidden bg-primary-black'>
    <Navbar />
    <ScrollBar />
    <Hero />
    <div className={`${yPaddings} relative`}>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </div>
    <div className={`${yPaddings} relative`}>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </div>
    <World />
    <div className={`${yPaddings} relative`}>
      <Insights />
      <div className='gradient-04 z-0' />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
