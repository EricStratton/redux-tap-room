export const addKeg = (keg) => {
  const { name, brand, price, abv, stock, id } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    price,
    abv,
    stock,
    id
  }
};

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const pourFromKeg = (keg) => {
  const { name, brand, price, abv, stock, id } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    price,
    abv,
    stock: stock - 1,
    id
  }
}