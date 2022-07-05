import React from 'react';
import {ReactTestRendererJSON} from 'react-test-renderer';
import {render, cleanup} from 'react-native-testing-library';
import {useAlert} from 'contexts/alert';

import Alert from '../';

jest.mock('contexts/alert');
describe('Alert Component', () => {
  const mockedUseAlert: jest.Mock = useAlert as jest.Mock;

  beforeEach(() => {
    mockedUseAlert.mockReturnValue({error: null, success: null});
  });

  afterEach(() => {
    mockedUseAlert.mockReset();
    cleanup();
  });

  test('should render null if there is no error or success to show', () => {
    const result = render(<Alert />);

    expect(result.toJSON()).toMatchSnapshot();
  });

  test('should render Alert component with error message', () => {
    let tree: ReactTestRendererJSON | null = null;
    mockedUseAlert.mockReturnValue({
      error: 'sample error',
    });

    const {getByText, toJSON} = render(<Alert />);
    tree = toJSON();

    expect(getByText('sample error')).not.toBeNull();
    expect(tree).toMatchSnapshot();
  });

  test('should render Alert component with success message', () => {
    let tree: ReactTestRendererJSON | null = null;
    mockedUseAlert.mockReturnValue({
      success: 'sample success',
    });

    const {getByText, toJSON} = render(<Alert />);
    tree = toJSON();

    expect(getByText('sample success')).not.toBeNull();
    expect(tree).toMatchSnapshot();
  });
});
