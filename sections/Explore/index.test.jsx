import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Explore from './index';

describe('Explore', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<Explore />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the Explore section should have the correct id', () => {
    expect(wrapper.getByTestId('page-section')).toHaveAttribute(
      'id',
      'explore',
    );
  });
});
