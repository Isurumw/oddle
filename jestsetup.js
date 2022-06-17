import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('strip-indent', () => jest.fn(query => query));
