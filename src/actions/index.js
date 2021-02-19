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
}