export default (state = {}, action) => {
  const { name, brand, price, abv, stock, id } = action;
  switch(action.type) {
    case 'ADD_KEG':
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
    case 'DELETE_KEG':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};