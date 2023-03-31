'use client';
import React from 'react';

const FeedbackCards = ({ feedbacks }) => {
  return (
    <ul className='relative flex flex-col gap-8'>
      {feedbacks.length &&
        feedbacks.map(({ name, occupation, feedback }, index) => (
          <li key={name + index} className='rounded-3xl border p-4'>
            <div className='feedback-gradient'></div>
            <h5 className='text-2xl font-bold'>{name}</h5>
            <h6 className='mt-2 text-xs'>{occupation}</h6>

            <p className='mt-6 text-lg leading-9'>{feedback}</p>
          </li>
        ))}
    </ul>
  );
};

export default FeedbackCards;
