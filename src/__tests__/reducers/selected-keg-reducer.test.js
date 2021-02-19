import selectedKegReducer from './../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  const currentState = {
    1: { name: 'Super Saison',
    brand: 'Super Brews',
    price: 8,
    abv: 7,
    stock: 124,
    id: 1 },
    2: { name: 'Serious Stout',
    brand: 'Moose Beers',
    price: 10,
    abv: 12,
    stock: 124,
    id: 2 }
  }

  test('Should return default state if no action passed into reducer', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test('Should select correct keg by ID', () => {
    action = {
      
    };
    expect(selectedKegReducer({}[1], { type: action })).toEqual({
      1: { name: 'Super Saison',
    brand: 'Super Brews',
    price: 8,
    abv: 7,
    stock: 124,
    id: 1 }
    })
  });
});
