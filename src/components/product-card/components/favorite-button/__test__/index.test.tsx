import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import FavoriteButton from '../';

describe('check the behavior of the favorite-button component:', () => {
  it('Renders correctly, when the loading is true', () => {
    const component = render(<FavoriteButton onPress={jest.fn()} loading />);

    expect(component.queryByTestId('loading_indicator')).toBeTruthy();
    expect(component.queryByTestId('icon_heart')).toBeNull();
  });

  it('Renders correctly, when the loading is false', () => {
    const component = render(
      <FavoriteButton onPress={jest.fn()} loading={false} />,
    );

    expect(component.queryByTestId('loading_indicator')).toBeNull();
    expect(component.queryByTestId('icon_heart')).toBeTruthy();
  });

  it('Renders correctly, when the loading is false', () => {
    const mockHandleButtonPress: jest.Mock<void> = jest.fn();

    const component = render(
      <FavoriteButton onPress={mockHandleButtonPress} loading={false} />,
    );

    const button = component.getByTestId('button_favorite');
    fireEvent.press(button);
    expect(mockHandleButtonPress).toBeCalledTimes(1);
  });
});
