'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { section } from '../../styles';
import { staggerContainer, fadeIn, zoomIn } from '../../utils/motion';

import { FeedbackCards } from '../../components';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Samantha',
      occupation: 'Metaversus Founder',
      feedback:
        "“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”",
    },
    {
      name: 'Samantha',
      occupation: 'Metaversus Founder',
      feedback:
        "“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”",
    },
  ]);

  return (
    <section className={`${section} mt-14`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <FeedbackCards feedbacks={feedbacks} />

        <motion.div
          variants={fadeIn('left', 'tween', 0.75, 0.75)}
          initial='hidden'
          whileInView='show'
          className='lg:relative lg:flex-1'
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
