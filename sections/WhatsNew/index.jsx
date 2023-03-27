'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';

import { staggerContainer, planetVariants } from '../../utils/motion';

import { TitleText, TypingText, NewFeatures } from '../../components';


const GetStarted = () => {
  const [newsList] = useState([
    {
      id: 'news-1',
      title: 'A new world',
      img: 'vrpano.svg',
      description:
        'we have the latest update with new world for you to try never mind',
    },
    {
      id: 'news-2',
      title: 'More realistic',
      img: 'headset.svg',
      description:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
    },
  ]);

  return (
    <section className={`${styles.section}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} mx-auto flex w-full flex-col gap-8 lg:flex-row lg:items-center 2xl:max-w-[1280px]`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}

        <div className='flex flex-[0.95] flex-col justify-center'>
          <TypingText title='| Whats New?' />

          <TitleText title="What's new about Metaversus?" />

          <NewFeatures featuresList={newFeatures} />
        </div>

        <motion.div variants={planetVariants('right')}>
          <img
            src='/whats-new.png'
            className={`${styles.planetsDimensions}`}
            alt=''
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
