import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, abv, stock, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    abv,
    stock,
    id
  }
};

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const pourFromKeg = (keg) => {
  const { name, brand, price, abv, stock, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    abv,
    stock: stock - 1,
    id
  }
};

export const selectKeg = (selectedKeg) => {
  const { name, brand, price, abv, stock, id } = selectedKeg;
  return {
    type: c.SELECT_KEG,
    name,
    brand,
    price,
    abv,
    stock,
    id
  };
}

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});