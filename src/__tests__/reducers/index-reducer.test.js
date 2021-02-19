import rootReducer from './../../reducers/index';

describe("rootReducer", () => {
  
  test('Should return default if no action type recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false
    });
  })
});
