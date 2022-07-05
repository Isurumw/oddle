import {fetchOpacity, fetchRadius} from './';

describe('check the behavior of the helper methods:', () => {
  /** fetch-opacity */
  it('fetch opacity, when is-disabled is true', () => {
    expect(fetchOpacity(true)).toEqual(0.5);
  });
  it('fetch opacity, when is-disabled is false', () => {
    expect(fetchOpacity(false)).toEqual(1);
  });
  /** fetch-radius */
  it('fetch radius, when the type is small', () => {
    expect(fetchRadius('small')).toEqual(4);
  });
  it('fetch radius, when the type is medium', () => {
    expect(fetchRadius('medium')).toEqual(6);
  });
  it('fetch radius, when the type is large', () => {
    expect(fetchRadius('large')).toEqual(12);
  });
  /** TODO: add test coverage for each of the other methods. */
});
