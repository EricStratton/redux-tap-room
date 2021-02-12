import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingPour } = props; // Object Destructuring //

  let sellButton; 
  let poursLeft;
  if(keg.stock !== 0) {// Handle hiding sell button and displaying 'Keg Empty' warning when stock reaches 0.
    poursLeft = <h4>{ keg.stock }</h4>;
    sellButton = <button onClick={ () => onClickingPour() }>Sell</button>
  } else {
      poursLeft = <h4><strong>Keg is Empty</strong></h4>;
  };

  return (
    <>
      <h3>Keg Details</h3>
      <hr />
      <h3>{ keg.name } - { keg.brand }</h3>
      <h4>Price: ${ keg.price }/pint</h4>
      <h4>ABV: { keg.abv }%</h4>
      { poursLeft }
      { sellButton }
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ () => onClickingDelete(keg.id) }>Remove Keg</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPour: PropTypes.func
};

export default KegDetail;