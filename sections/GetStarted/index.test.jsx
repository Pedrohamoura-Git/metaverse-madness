import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import GetStarted from './index';

describe('GetStarted', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<GetStarted />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the GetStarted section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'get-started',
    );
  });

  it('the GetStarted section should have the correct image', () => {
    expect(wrapper.getByTestId('get-started-image')).toHaveAttribute(
      'src',
      '/get-started.png',
    );
  });
});
