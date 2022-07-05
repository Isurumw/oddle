import {trimmedText, timeDescription} from './';

describe('check the behavior of the helper methods:', () => {
  /** trimmed-text */
  it('trimmed text, when should-trim is true', () => {
    expect(trimmedText('d50aeb3c-7342-4675-b836-b4f9867eebb4', true)).toEqual(
      'd50aeb3c',
    );
  });
  it('trimmed text, when should-trim is true', () => {
    expect(trimmedText('d50aeb3c-7342-4675-b836-b4f9867eebb4', false)).toEqual(
      'd50aeb3c-7342-4675-b836-b4f9867eebb4',
    );
  });
  /** time-description */
  it('check for morning', () => {
    expect(timeDescription(8)).toEqual('Good morning!');
  });
  /** time-description */
  it('check for afternoon', () => {
    expect(timeDescription(13)).toEqual('Good afternoon!');
  });
  /** time-description */
  it('check for afternoon', () => {
    expect(timeDescription(17)).toEqual('Good evening!');
  });
});
