import {fetchLineDecoration} from './';

describe('check the behavior of the helper methods:', () => {
  /** fetch-line-decoration */
  it('fetch line decoration, when is-underlined is true', () => {
    expect(fetchLineDecoration(true)).toEqual('underline');
  });
  it('fetch line decoration, when is-underlined is false', () => {
    expect(fetchLineDecoration(false)).toEqual('none');
  });
});
