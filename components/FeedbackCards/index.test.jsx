import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import FeedbackCards from './index';

describe('FeedbackCards', () => {
  let wrapper;
  const feedbacks = [
    {
      name: 'test 1',
      occupation: 'occupation test',
      feedback: 'good feedback',
    },
  ];

  const wrapperBuilder = () => {
    return render(<FeedbackCards feedbacks={feedbacks} />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('should render the MetaverseBtn if wasThisCardSelected is truthy', () => {
    expect(wrapper.getByTestId('feedback-name')).toHaveTextContent(
      feedbacks[0].name,
    );
  });

  it('should render the MetaverseBtn if wasThisCardSelected is truthy', () => {
    expect(
      wrapper.getByTestId('feedback-occupation'),
    ).toHaveTextContent(feedbacks[0].occupation);
  });

  it('should render the MetaverseBtn if wasThisCardSelected is truthy', () => {
    expect(
      wrapper.getByTestId('feedback-feedback'),
    ).toHaveTextContent(feedbacks[0].feedback);
  });
});
