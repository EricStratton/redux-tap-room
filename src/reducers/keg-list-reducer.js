export default (state = {}, action) => {
  const { name, brand, price, abv, stock, id } = action;
  switch(action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          price,
          abv,
          stock,
          id
        }
      });
    default:
      return state;
  }
};