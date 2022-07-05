import {joinedTags} from './';

describe('check the behavior of the helper methods:', () => {
  it('joined tags, when there is only one tags', () => {
    expect(joinedTags(['cruelty free'])).toEqual('cruelty free');
  });

  it('joined tags, when there are number of tags', () => {
    expect(joinedTags(['cruelty free', 'Vegan'])).toEqual(
      'cruelty free, Vegan',
    );
  });

  it('joined tags, when there are no tags', () => {
    expect(joinedTags([])).toEqual('N/A');
  });
});
