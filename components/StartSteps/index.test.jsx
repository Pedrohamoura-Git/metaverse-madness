import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import StartSteps from './index';

import { startingFeatures } from '../../constants';


describe('StartSteps', () => {
  let wrapper;

  const wrapperBuilder = () => {
    return render(<StartSteps stepsList={startingFeatures} />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the step should have the correct number', () => {
    expect(
      wrapper.getByTestId('step-number-2'),
    ).toHaveTextContent('03');
  });

  it('the step should have the correct description', () => {
    expect(
      wrapper.getByTestId('step-description-0'),
    ).toHaveTextContent(startingFeatures[0].description);
  });
});
