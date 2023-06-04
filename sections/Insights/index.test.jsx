import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Insights from './index';

describe('Insights', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<Insights />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the Insights section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'insights',
    );
  });
});
