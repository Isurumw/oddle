import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import ProductCard from '../';

const mockProduct = {
  id: 'cl4cev9c23lgg0cpnu4zl3ykg',
  name: 'Lippie Stix',
  description: 'Lippie Stix Formula contains Vitamin E',
  price: '5.5',
  brand: 'colourpop',
  tagList: ['cruelty free', 'Vegan'],
  category: 'lipstick',
  productType: 'lipstick',
  apiFeaturedImage:
    '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651',
  websiteLink: 'https://colourpop.com',
  productLink: 'https://colourpop.com/collections/lippie-stix',
};

describe('check the behavior of the product-card component:', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Renders correctly', () => {
    const component = render(
      <ProductCard
        product={mockProduct}
        onPressViewBrand={jest.fn()}
        onPressOrderNow={jest.fn()}
        onPressAddToFavorites={jest.fn()}
      />,
    );
    expect(component).toBeTruthy();
  });

  it('Press the button view brand', () => {
    const mockHandleButtonPress: jest.Mock<void> = jest.fn();

    const component = render(
      <ProductCard
        product={mockProduct}
        onPressViewBrand={mockHandleButtonPress}
        onPressOrderNow={jest.fn()}
        onPressAddToFavorites={jest.fn()}
      />,
    );

    const button = component.getByTestId('button_view_brand');

    fireEvent.press(button);
    expect(mockHandleButtonPress).toBeCalledTimes(1);
  });

  it('Press the button order now', () => {
    const mockHandleButtonPress: jest.Mock<void> = jest.fn();

    const component = render(
      <ProductCard
        product={mockProduct}
        onPressViewBrand={jest.fn()}
        onPressOrderNow={mockHandleButtonPress}
        onPressAddToFavorites={jest.fn()}
      />,
    );

    const button = component.getByTestId('button_order_now');

    fireEvent.press(button);
    expect(mockHandleButtonPress).toBeCalledTimes(1);
  });

  it('Double press the cover image', async () => {
    const mockHandleButtonPress: jest.Mock<void> = jest.fn();

    const component = render(
      <ProductCard
        product={mockProduct}
        onPressViewBrand={jest.fn()}
        onPressOrderNow={jest.fn()}
        onPressAddToFavorites={mockHandleButtonPress}
      />,
    );

    const button = component.getByTestId('button_cover');

    fireEvent.press(button);
    fireEvent.press(button);
    expect(mockHandleButtonPress).toBeCalledTimes(1);

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
});
