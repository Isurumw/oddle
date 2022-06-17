import React from 'react';
import {render} from 'react-native-testing-library';

import LoadingIndicator from '../';

describe('check the behavior of the loading-indicator component:', () => {
  it('Renders correctly, when the loading is true', () => {
    const component = render(<LoadingIndicator loading />);
    expect(component.queryByTestId('loading_indicator')).toBeTruthy();
  });

  it('Renders correctly, when the loading is false', () => {
    const component = render(<LoadingIndicator loading={false} />);
    expect(component.queryByTestId('loading_indicator')).toBeNull();
  });
});
