import rootReducer from './../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import kegListReducer from './../../reducers/keg-list-reducer';
import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('Should return default if no action type recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });

  test('Check inital state of kegListReducer matches root reducer', () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check inital state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  })

  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'Happenin\' Hazy IPA',
      brand: 'Big Head Brews',
      price: 8,
      abv: 6,
      stock: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
    const action = {
      type: c.SELECT_KEG,
      name: 'Happenin\' Hazy IPA',
      brand: 'Big Head Brews',
      price: 8,
      abv: 6,
      stock: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});
