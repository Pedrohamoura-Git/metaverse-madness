'use client';
import React, { useState } from 'react';

import styles from '../../styles';

import { TitleText, TypingText } from '../../components/CustomTexts';

const GetStarted = () => {
  const [instructionsList] = useState([
    {
      id: 'id-1',
      description:
        'Find a world that suits you and you want to enter',
    },
    {
      id: 'id-2',
      description: 'Enter the world by reading basmalah to be safe',
    },
    {
      id: 'id-3',
      description:
        'No need to beat around the bush, just stay on the gas and have fun',
    },
  ]);

  return (
    <section className={`${styles.innerWidth} mx-auto text-white`}>
      <div
        className={`${styles.paddings} flex flex-col items-center justify-between lg:flex-row`}
      >
        {/* Todo: animar a rotação do planeta e de alguns sateletes também */}
        <img
          src='/get-started.png'
          className='h-full max-h-[527.33px] w-full max-w-[461.32px]'
          alt=''
        />
        <div className='max-w-md sm:w-full'>
          <TypingText title='| How Metaversus Works' />

          <TitleText
            title='Get started with just a few clicks'
            textStyles='mb-8'
          />

        </div>
      </div>
    </section>
  );
};

export default GetStarted;
