import * as React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {AlertProvider, useAlert} from './';

describe('Alert Context API', () => {
  test('should set error message', () => {
    const wrapper = ({children}: any): JSX.Element => (
      <AlertProvider>{children}</AlertProvider>
    );
    const {result} = renderHook(() => useAlert(), {wrapper});

    expect(result.current.error).toBe(null);

    // set error message
    act(() => {
      jest.useFakeTimers();
      result.current.setError('test error');
    });

    expect(result.current.error).toBe('test error');

    // after 5 seconds set error message back to null
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.error).toBe(null);
  });

  test('should set error message with custom duration', () => {
    const wrapper = ({children}: any): JSX.Element => (
      <AlertProvider>{children}</AlertProvider>
    );
    const {result} = renderHook(() => useAlert(), {wrapper});

    expect(result.current.error).toBe(null);

    // set error message
    act(() => {
      jest.useFakeTimers();
      result.current.setError('test error', 3);
    });

    expect(result.current.error).toBe('test error');

    // after 3 seconds set error message back to null
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.error).toBe(null);
  });

  test('should set success message', () => {
    const wrapper = ({children}: any): JSX.Element => (
      <AlertProvider>{children}</AlertProvider>
    );
    const {result} = renderHook(() => useAlert(), {wrapper});

    expect(result.current.success).toBe(null);

    // set success message
    act(() => {
      jest.useFakeTimers();
      result.current.setSuccess('test success');
    });

    expect(result.current.success).toBe('test success');

    // after 5 seconds set success message back to null
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.success).toBe(null);
  });

  test('should set success message with custom duration', () => {
    const wrapper = ({children}: any): JSX.Element => (
      <AlertProvider>{children}</AlertProvider>
    );
    const {result} = renderHook(() => useAlert(), {wrapper});

    expect(result.current.success).toBe(null);

    // set success message
    act(() => {
      jest.useFakeTimers();
      result.current.setSuccess('test success', 3);
    });

    expect(result.current.success).toBe('test success');

    // after 3 seconds set success message back to null
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.success).toBe(null);
  });
});
