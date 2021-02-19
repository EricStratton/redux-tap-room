import kegListReducer from './../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Super Saison',
    brand: 'Super Brews',
    price: 8,
    abv: 7,
    stock: 124,
    id: 1
  }

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

  test('Should return default state if no action is passed into reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new keg data to mainKegList', () => {
    const { name, brand, price, abv, stock, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name,
      brand,
      price,
      abv,
      stock,
      id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        price,
        abv,
        stock,
        id
      }
    });
  });

  test('Should delete a keg from mainKegList', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { name: 'Serious Stout',
      brand: 'Moose Beers',
      price: 10,
      abv: 12,
      stock: 124,
      id: 2 }
    });
  });


});