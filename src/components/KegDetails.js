import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props; // Object Destructuring //
  return (
    <>
      <h3>Keg Details</h3>
      <h3>{ keg.name } - { keg.brand }</h3>
      <h4>{ keg.price }</h4>
      <h4>{ keg.abv }</h4>
      <h4>{ keg.stock }</h4>
    </>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
}

export default KegDetail;