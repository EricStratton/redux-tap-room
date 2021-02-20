import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, price, abv, stock, id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return {
        name,
        brand,
        price,
        abv,
        stock,
        id
      }
    default:
      return state;
  }
}