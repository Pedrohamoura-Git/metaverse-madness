import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './index';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should have the correct title', () => {
    const header = screen.getByRole('heading');
    const headerText = 'Enter the Metaverse';

    expect(header).toHaveTextContent(headerText);
  });

  it('should have the correct company name', () => {
    const companyNameParagraph = screen.getByTestId('company-name');
    const companyName = 'Metaversus';

    expect(companyNameParagraph).toHaveTextContent(companyName);
  });

  it('should have the correct copyright text', () => {
    const copyrightParagraph = screen.getByTestId('copyright');
    const copyrightText =
      'Copyright © 2021 - 2022 Metaversus. All rights reserved.';

    expect(copyrightParagraph).toHaveTextContent(copyrightText);
  });

  it('should have the correct social media icons', () => {
    const imageNames = [
      'twitter',
      'linkedin',
      'instagram',
      'facebook',
    ];

    imageNames.map((name) => {
      const image = screen.getByAltText(`${name}-icon`);

      expect(image).toHaveAttribute('src', `/${name}.svg`);
    });
  });
});
