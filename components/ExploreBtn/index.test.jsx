import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ExploreBtn from './index';

describe('ExploreBtn', () => {
  beforeEach(() => {
    render(
      <ExploreBtn
        href='/test'
        linkClasses='class-1 class-2'
        imageClasses='class-3 class-4'
      />,
    );
  });

  it('Should go to correct route based on href prop', () => {
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/test');
  });

  it('The link should have the classes specified by prop', () => {
    const link = screen.getByRole('link');

    expect(link).toHaveClass('class-1 class-2');
  });

  it('Should have the correct image', () => {
    const image = screen.getByAltText('stamp');

    expect(image).toHaveAttribute('src', '/stamp.png');
  });

  it('The image should have the classes specified by prop', () => {
    const image = screen.getByAltText('stamp');

    expect(image).toHaveClass('class-3 class-4');
  });
});
