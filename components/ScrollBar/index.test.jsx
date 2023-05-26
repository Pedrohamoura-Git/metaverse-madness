import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import NewFeatures from './index';

describe('NewFeatures', () => {
  let wrapper;

  const sectionList = [
    {
      title: 'hero',
      id: 'hero',
    },
  ];

  const wrapperBuilder = () => {
    return render(<NewFeatures sectionList={sectionList} />);
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('the link should have the correct href attribute', () => {
    const img = wrapper.getByTestId(
      `section-link-${sectionList[0].id}`,
    );

    expect(img).toHaveAttribute('href', `#${sectionList[0].id}`);

    expect(img).toHaveTextContent(sectionList[0].title);
  });
});
