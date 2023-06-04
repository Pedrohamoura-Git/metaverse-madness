import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import WhatsNew from './index';

describe('WhatsNew', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<WhatsNew />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the WhatsNew section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'whats-new',
    );
  });

  it('the Hero section should have the correct image', () => {
    expect(wrapper.getByTestId('hero-image')).toHaveAttribute(
      'src',
      '/whats-new.png',
    );
  });
});
