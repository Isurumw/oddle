import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageService from './';

const storage = new StorageService(AsyncStorage);

const mockObject = {
  id: '758-Test',
  status: {
    name: 'Active',
    code: 'ACTIVE',
  },
  address: {
    numberFirstPrefix: 112,
    numberFirstSuffix: 334,
    streetName: 'mock street name',
  },
};

describe('storage', () => {
  it('should call AsyncStorage getItem method with supplied key', async () => {
    AsyncStorage.getItem = jest.fn(() => Promise.resolve('test_value'));

    await storage.get('test_key');
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('test_key');
  });

  it('should return null on get when their is an error', async () => {
    AsyncStorage.getItem = jest.fn(() =>
      Promise.reject(new Error('Failed to fetch')),
    );

    expect(storage.get('test_key')).rejects.toMatchSnapshot();
  });

  it('should call AsyncStorage setItem method with supplied key and value', async () => {
    AsyncStorage.setItem = jest.fn();

    await storage.set('test_key', 'test_value');
    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('test_key', 'test_value');
  });

  it('should call AsyncStorage removeItem method with supplied key', async () => {
    AsyncStorage.removeItem = jest.fn();

    await storage.remove('test_key');
    expect(AsyncStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('test_key');
  });

  /** test storing objects */

  it('should call AsyncStorage setItem method with supplied key and object', async () => {
    AsyncStorage.setItem = jest.fn();

    await storage.set('property', JSON.stringify(mockObject));
    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'property',
      JSON.stringify(mockObject),
    );
  });

  it('should call AsyncStorage removeItem method with supplied key to remove the stored object', async () => {
    AsyncStorage.removeItem = jest.fn();

    await storage.remove('property');
    expect(AsyncStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('property');
  });
});
