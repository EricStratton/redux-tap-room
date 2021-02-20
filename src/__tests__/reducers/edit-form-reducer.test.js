import editFormReducer from './../../reducers/edit-form-reducer';
// import * as c from './../../actions/ActionTypes';

describe("editFormReducer", () => {

  test('Should return default state if no action is recognized', () => {
    expect(editFormReducer(false, { type: null })).toEqual(false);
  });

});