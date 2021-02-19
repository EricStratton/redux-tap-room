import kegListReducer from './../../reducers/keg-list-reducer';

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

  test('Should return default state if no action is passed into reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new keg data to mainKegList', () => {
    const { name, brand, price, abv, stock, id } = kegData;
    action = {
      type: 'ADD_TICKET',
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


});