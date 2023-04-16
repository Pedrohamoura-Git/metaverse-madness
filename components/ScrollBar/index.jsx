'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { slideIn } from '../../utils/motion';

function ScrollBar() {
  const { scrollYProgress } = useScroll();

  const sectionList = [
    {
      title: 'hero',
      id: 'hero',
    },
    {
      title: 'about',
      id: 'about',
    },
    {
      title: 'explore',
      id: 'explore',
    },
    {
      title: 'get started',
      id: 'get-started',
    },
    {
      title: 'whats new',
      id: 'whats-new',
    },
    {
      title: 'world',
      id: 'world',
    },
    {
      title: 'insights',
      id: 'insights',
    },
    {
      title: 'Feedback',
      id: 'feedback',
    },
    {
      title: 'footer',
      id: 'footer',
    },
  ];

  return (
    <motion.nav
      variants={slideIn('right', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      className='fixed top-[10vh] right-[2vw] z-20 hidden w-max items-center justify-between truncate text-white lg:flex'
    >
      <motion.div className='relative '>
        <div className='flex items-center justify-center gap-4'>
          <ul className='flex h-[80vh] flex-col items-end justify-between py-1'>
            {sectionList.map(({ title, id }) => (
              <li key={id} className='w-max'>
                <a
                  href={`#${id}`}
                  className='rounded-xl border p-1 capitalize'
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <div className='h-[80vh] w-5 truncate rounded-2xl border p-[5px] py-2'>
            <motion.div
              className='progress hero-gradient h-[78vh] origin-top rounded-3xl'
              style={{ scaleY: scrollYProgress }}
            />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default ScrollBar;
