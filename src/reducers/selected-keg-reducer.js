import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { keg } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return keg;
    default:
      return state;
  }
}