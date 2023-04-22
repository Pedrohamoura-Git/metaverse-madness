import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MetaverseBtn from './index';

describe('MetaverseBtn', () => {
  beforeEach(() => {
    render(<MetaverseBtn />);
  });

  it('should have the correct image', () => {
    const image = screen.getByAltText('headset');
    expect(image).toHaveAttribute('src', '/headset.svg');
  });

  it('should have the correct text', () => {
    const p = screen.getByTestId('button-text');
    const pText = 'Enter metaverse';
    expect(p).toHaveTextContent(pText);
  });
});
