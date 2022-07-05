/*
 * The "IStorage" is a simple wrapper around AsyncStorage storage. Use this class to context and
 * retrieve user-data.
 */

class StorageService<T> implements IStorage {
  private storage: any;

  public constructor(storage: T) {
    this.storage = storage;
  }

  public async get(key: string): Promise<string | null> {
    try {
      const value = await this.storage.getItem(key);
      return value || null;
    } catch (err) {
      throw new Error(`Could not receive the ${key} from cache`);
    }
  }

  public async getObject<P>(key: string): Promise<P | null> {
    try {
      const value = await this.storage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      throw new Error(`Could not receive the ${key} from cache`);
    }
  }

  public async set(key: string, value: string): Promise<void> {
    try {
      await this.storage.setItem(key, value);
    } catch (err) {
      throw new Error(`Could not save the ${key} in cache`);
    }
  }

  public async remove(key: string): Promise<void> {
    try {
      await this.storage.removeItem(key);
    } catch (err) {
      throw new Error(`Could not remove the ${key} from cache`);
    }
  }
}

export default StorageService;
