import selectedKegReducer from './../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  test('Should return default state if no action passed into reducer', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });
});
