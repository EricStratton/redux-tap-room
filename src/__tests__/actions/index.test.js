import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('tap room a', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 124,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 124,
      id: 1
    });
  });

  it('pourFromKeg should create ADD_KEG action but stock by one', () => {
    expect(a.pourFromKeg({
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 124,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: 'Purrfect Pilsner',
      brand: 'Bear-ery',
      price: 6,
      abv: 5,
      stock: 123,
      id: 1
    })
  })

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

});