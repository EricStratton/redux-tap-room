import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <>
      {Object.values(props.kegList).map((keg) => 
        <Keg
          whenKegClicked = { props.onKegSelection }
          name={ keg.name }
          brand={ keg.brand }
          price={ keg.price }
          abv={ keg.abv }
          stock={ keg.stock }
          key={ keg.id }
          id={ keg.id } />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;