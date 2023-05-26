import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import ExploreCard from './index';

describe('ExploreCard', () => {
  let wrapper;
  const updateSelectedWorldMock = jest.fn();

  const wrapperBuilder = () => {
    return render(
      <ExploreCard
        id='world-1'
        imgUrl='/world-1.png'
        title='world-1'
        index={0}
        selectedWorld='world-2'
        updateSelectedWorld={updateSelectedWorldMock}
      />,
    );
  };

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('should render the MetaverseBtn if wasThisCardSelected is truthy', () => {
    wrapper = render(
      <ExploreCard id='world-1' selectedWorld='world-1' />,
    );

    expect(wrapper.getByTestId('metaverse-btn')).toBeInTheDocument();
  });

  it('Should have the correct image', () => {
    const image = wrapper.getByTestId('card-image');

    expect(image).toHaveAttribute('src', '/world-1.png');
  });

  it('should call updateSelectedWorld(id) when "cards-wrapper" is clicked', () => {
    expect(wrapper).toBeTruthy();

    const cardsWrapper = wrapper.getByTestId('cards-wrapper-0');

    fireEvent.click(cardsWrapper);

    expect(updateSelectedWorldMock).toBeCalled();
  });
});
