'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { section, innerWidth, paddings } from '../../styles';
import { staggerContainer, fadeIn, zoomIn } from '../../utils/motion';

import { ExploreBtn, FeedbackCards } from '../../components';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Samantha',
      occupation: 'Metaversus Founder',
      feedback:
        "“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”",
    },
  ]);

  return (
    <section className={`${section} mt-14`} id='feedback'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${innerWidth} ${paddings} lg:flex lg:items-center lg:gap-6`}
        id='feedback'
        data-testid='page-section'
      >
        <FeedbackCards feedbacks={feedbacks} />

        <motion.div
          variants={fadeIn('left', 'tween', 0.75, 0.75)}
          initial='hidden'
          whileInView='show'
          className='lg:relative lg:flex-1'
        >
          <img
            src='/planet-09.png'
            alt='rocket among planets'
            className='mt-8 h-52 w-full rounded-3xl object-cover md:h-80 lg:mt-0 lg:h-[610px] lg:max-w-[800px]'
            data-testid='feedback-image'
          />

          <ExploreBtn
            href='#explore'
            imageClasses='absolute top-5 -left-24 hidden h-40 w-40 rounded-3xl object-cover lg:inline'
            imageAnimation={zoomIn(1, 0.75)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
