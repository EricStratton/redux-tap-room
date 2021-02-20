import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  let action;

  test('Should return default state if no action passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should select current keg to return', () => {
    let thisKeg = { name: 'Super Saison',
      brand: 'Super Brews',
      price: 8,
      abv: 7,
      stock: 124,
      id: 1 
    }
    action = {
    type: c.SELECT_KEG,
    keg: thisKeg 
    }
    expect(selectedKegReducer(null, action)).toEqual(thisKeg);
  });
});
