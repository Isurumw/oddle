import {fetchFontFamily, fetchFontWeight, capitalize} from './';

describe('check the behavior of the helper methods:', () => {
  /** fetch-font-family */
  it('fetch font family, when is-bold is true', () => {
    expect(fetchFontFamily(true)).toEqual('IBMPlexSans-Bold');
  });
  it('fetch font family, when is-bold is false', () => {
    expect(fetchFontFamily(false)).toEqual('IBMPlexSans-Regular');
  });
  /** fetch-font-weight */
  it('fetch font weight, when is-bold is true', () => {
    expect(fetchFontWeight(true)).toEqual('700');
  });
  it('fetch font weight, when is-bold is false', () => {
    expect(fetchFontWeight(false)).toEqual('400');
  });

  it('A text capitalize correctly', () => {
    const text = 'WAITING_FOR_DOCS';
    expect(capitalize(text)).toEqual('Waiting for docs');
  });
});
