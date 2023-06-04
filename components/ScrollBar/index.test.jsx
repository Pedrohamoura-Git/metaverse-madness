import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import ScrollBar from './index';

describe('ScrollBar', () => {
  let wrapper;

  const sectionList = [
    {
      title: 'hero',
      id: 'hero',
    },
  ];

  const wrapperBuilder = () => {
    return render(<ScrollBar sectionList={sectionList} />);
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
