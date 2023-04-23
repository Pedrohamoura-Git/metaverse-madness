import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TypingText, TitleText } from './index';

describe('TypingText', () => {
  it('should render the title received as props', () => {
    render(<TypingText title='typing text' />);

    const header = screen.getByTestId('typing-paragraph');

    expect(header).toHaveTextContent('typing text');
  });
});

describe('TitleText', () => {
  it('should render the title received as props', () => {
    render(<TitleText title='title text' />);

    const header = screen.getByRole('heading');

    expect(header).toHaveTextContent('title text');
  });
});
