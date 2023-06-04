import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Hero from './index';

describe('Hero', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<Hero />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the Hero section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'hero',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('hero-image')).toHaveAttribute(
      'src',
      '/cover.png',
    );
  });
});
