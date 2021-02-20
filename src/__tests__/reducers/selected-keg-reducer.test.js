import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  let action; // Do I actually need this?? // handleChangingSelectedKeg grabs keg id and then we'll pass it to our reducer.
  // const currentState = {
  //   1: { name: 'Super Saison',
  //   brand: 'Super Brews',
  //   price: 8,
  //   abv: 7,
  //   stock: 124,
  //   id: 1 },
  //   2: { name: 'Serious Stout',
  //   brand: 'Moose Beers',
  //   price: 10,
  //   abv: 12,
  //   stock: 124,
  //   id: 2 }
  // }

  test('Should return default state if no action passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should select correct keg by ID', () => {
    let keg = { name: 'Super Saison',
      brand: 'Super Brews',
      price: 8,
      abv: 7,
      stock: 124,
      id: 1 
      }
      action = {
      type: c.SELECT_KEG,
      keg: keg }
    expect(selectedKegReducer(null, action)).toEqual({
    { name: 'Super Saison',
        brand: 'Super Brews',
        price: 8,
        abv: 7,
        stock: 124,
        id: 1 }
    });
  });
});
