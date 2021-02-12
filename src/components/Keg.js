import React from 'react';
import PropTypes from 'prop-types';

function Keg() {
  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{ props.name }</h3>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired
}

export default Keg;