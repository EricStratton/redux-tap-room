import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  const myStyledKeg = {
    fontFamily: 'sans-serif',
    paddingLeft: '25px'
  }

  let kegStatus;  
  if(props.stock === 0) {   // Handle displaying keg stock warning on keg stock view. //
    kegStatus = <h4><strong>Keg Empty</strong></h4>;
  } else if(props.stock <= 10) {
    kegStatus = <h4><strong>Almost Empty</strong></h4>;
  }; 

  return (
    <>
      <div style={ myStyledKeg }>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>{ props.name }</h3>
          <h4>${ props.price }/pint</h4>
          { kegStatus }
        </div>
      </div>
      <hr />
    </> 
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;