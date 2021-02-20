import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  let action;

  test('Should return default state if no action passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return current keg', () => {
    let thisKeg = { name: 'Super Saison',
      brand: 'Super Brews',
      price: 8,
      abv: 7,
      stock: 124,
      id: 1 
    }
    action = {
    type: c.SELECT_KEG,
    name: 'Super Saison',
    brand: 'Super Brews',
    price: 8,
    abv: 7,
    stock: 124,
    id: 1
    }
    expect(selectedKegReducer(null, action)).toEqual(thisKeg);
  });

  test('Should return null when deselecting keg', () => {
    action = {
      type: c.DESELECT_KEG,
      name: 'Super Saison',
      brand: 'Super Brews',
      price: 8,
      abv: 7,
      stock: 124,
      id: 1
      }
    expect(selectedKegReducer(null, action)).toEqual(null);
  });
});
