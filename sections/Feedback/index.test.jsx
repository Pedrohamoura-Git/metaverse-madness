import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Feedback from './index';

describe('Feedback', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<Feedback />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the Feedback section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'feedback',
    );
  });

  it('the Feedback section should have the correct image', () => {
    expect(wrapper.getByTestId('feedback-image')).toHaveAttribute(
      'src',
      '/planet-09.png',
    );
  });
});
