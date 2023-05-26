import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Navbar from './index';

describe('Navbar', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<Navbar />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('should render the correct insight img Url', () => {
    const img = wrapper.getByTestId('navbar-search-icon');

    expect(img).toHaveAttribute('src', '/search.svg');
  });

  it('should render the correct insight img Url', () => {
    const img = wrapper.getByTestId('navbar-menu-icon');

    expect(img).toHaveAttribute('src', '/menu.svg');
  });
});
