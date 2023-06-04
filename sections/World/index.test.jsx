import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import World from './index';

describe('World', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<World />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the World section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'world',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('world-image')).toHaveAttribute(
      'src',
      '/map.png',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('white-man-image')).toHaveAttribute(
      'src',
      '/white-man.png',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('white-woman-image')).toHaveAttribute(
      'src',
      '/white-woman.png',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('black-man-image')).toHaveAttribute(
      'src',
      '/black-man.png',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(
      wrapper.getByTestId('world-billboard-1-image'),
    ).toHaveAttribute('src', '/world-billboard-1.png');
  });

  it('the Hero section should have the correct image', () => {
    expect(
      wrapper.getByTestId('world-billboard-2-image'),
    ).toHaveAttribute('src', '/world-billboard-2.png');
  });
});
