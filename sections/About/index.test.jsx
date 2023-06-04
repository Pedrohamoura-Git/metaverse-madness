import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import About from './index';

describe('About', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<About />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the explore ', () => {
    expect(wrapper.getByTestId('explore-link')).toHaveAttribute(
      'href',
      '#explore',
    );
  });

  it("the explore link's image should have the correct src attribute", () => {
    expect(wrapper.getByTestId('explore-link-image')).toHaveAttribute(
      'src',
      '/arrow-down.svg',
    );
  });
});
