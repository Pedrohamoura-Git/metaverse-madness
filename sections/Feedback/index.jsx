'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { section } from '../../styles';
import { staggerContainer, fadeIn } from '../../utils/motion';


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
      <motion.div>

        <img
          src='/planet-09.png'
          alt='rocket among planets'
          className='mt-8 h-52 rounded-3xl object-cover'
        />
      </motion.div>
    </section>
  );
};

export default Feedback;
