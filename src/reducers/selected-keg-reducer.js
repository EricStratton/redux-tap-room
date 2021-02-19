import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { keg } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      let selected = keg.id;
      return selected;
    default:
      return state;
  }
}