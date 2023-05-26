import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import InsightCard from './index';

describe('InsightCard', () => {
  let wrapper;
  const insights = [
    {
      id: 'id 01',
      imgUrl: 'images/01.png',
      title: 'test title',
      subtitle: 'test subtitle',
    },
  ];

  const wrapperBuilder = () => {
    return render(<InsightCard insights={insights} />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('should render the correct insight img Url and alt', () => {
    const img = wrapper.getByTestId('insight-image');

    expect(img).toHaveAttribute('src', insights.imgUrl);

    expect(img).toHaveAttribute('alt', insights.title);
  });

  it('should render the props title', () => {
    expect(wrapper.getByTestId('insight-title')).toHaveTextContent(
      insights[0].title,
    );
  });

  it('should render the props subtitle', () => {
    expect(wrapper.getByTestId('insight-subtitle')).toHaveTextContent(
      insights[0].subtitle,
    );
  });
});
