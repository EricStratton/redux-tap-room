import kegListReducer from './../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  
});