import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import NewFeatures from './index';

describe('NewFeatures', () => {
  let wrapper;
  const featuresList = [
    {
      id: 'id 01',
      imgUrl: 'images/01.png',
      title: 'test title',
      subtitle: 'test subtitle',
    },
  ];

  const wrapperBuilder = () => {
    return render(<NewFeatures featuresList={featuresList} />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('should render the correct feature img Url and alt', () => {
    const img = wrapper.getByTestId('feature-image');

    expect(img).toHaveAttribute('src', featuresList.imgUrl);

    expect(img).toHaveAttribute('alt', featuresList.title);
  });

  it('should render the props title', () => {
    expect(wrapper.getByTestId('feature-title')).toHaveTextContent(
      featuresList[0].title,
    );
  });

  it('should render the props subtitle', () => {
    expect(wrapper.getByTestId('feature-subtitle')).toHaveTextContent(
      featuresList[0].subtitle,
    );
  });
});
