import * as React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {SharedProvider, useShared} from './';

describe('Shared Context API', () => {
  test('should set favorites', () => {
    const wrapper = ({children}: any): JSX.Element => (
      <SharedProvider>{children}</SharedProvider>
    );
    const {result} = renderHook(() => useShared(), {wrapper});

    expect(result.current.favoriteIdObjects).toEqual([]);

    // set error message
    act(() => {
      jest.useFakeTimers();
      result.current.setFavoriteIdObjects([
        {id: 'cl4cevbjy3liu0cpnim92e5eo', liked: true},
      ]);
    });

    expect(result.current.favoriteIdObjects).toEqual([
      {id: 'cl4cevbjy3liu0cpnim92e5eo', liked: true},
    ]);
  });
});
