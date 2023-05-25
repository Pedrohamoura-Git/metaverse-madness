describe('ExploreCard', () => {
  let wrapper;
  const wrapperBuilder = () =>
    render(
      <ExploreCard
        id='world-1'
        imgUrl='/world-1.png'
        title='world-1'
        index={0}
        selectedWorld='world-2'
        updateSelectedWorld={() => ({})}
      />,
    );

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

    const updateSelectedWorldMock = jest.fn();

    const cardsWrapper = wrapper.getByTestId('cards-wrapper');
    expect(cardsWrapper).toBeTruthy();
    console.log('cardsWrapper: ', cardsWrapper);

    fireEvent.click(cardsWrapper);

    expect(updateSelectedWorldMock).toBeCalled();
  });
});
