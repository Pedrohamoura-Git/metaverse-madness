'use client';
import React, { useState } from 'react';
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
    </section>
  );
};

export default GetStarted;
