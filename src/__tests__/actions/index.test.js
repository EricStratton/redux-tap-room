import * as actions from './../../actions';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 124,
      id: 1
    })).toEqual({
      type: 'ADD_KEG',
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 124,
      id: 1
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  })
})