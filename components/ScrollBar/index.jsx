'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

function ScrollBar() {
  const { scrollYProgress } = useScroll();

  const sectionList = [
    {
      title: 'Hero',
      id: 'hero',
    },
    // {
    //   title: 'Hero',
    //   id: 'hero'
    // },
    // {
    //   title: 'Hero',
    //   id: 'hero'
    // },
    // {
    //   title: 'Hero',
    //   id: 'hero'
    // },
    {
      title: 'Feedback',
      id: 'feedback',
    },
  ];

  return (
    <nav className='fixed top-[10vh] right-[4vw] z-20 h-[80vh] w-5 rounded-2xl border'>
      <div className='relative'>
        <div className='truncate p-[5px] py-2'>
          <motion.div
            className='progress hero-gradient h-[78vh] origin-top rounded-3xl'
            style={{ scaleY: scrollYProgress }}
          />
        </div>
        <ul>
          {sectionList.map(({ title, id }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default ScrollBar;
