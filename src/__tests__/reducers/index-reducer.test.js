import rootReducer from './../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import kegListReducer from './../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('Should return default if no action type recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false
    });
  });

  test('Check inital state of kegListReducer matches root reducer', () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check inital state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
});
