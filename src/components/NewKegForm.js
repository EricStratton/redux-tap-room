import React from 'react';
import ReusableFrom from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, stock: event.target.stock.value, id: v4() });
  }

  return (
    <>
      <ReusableFrom formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add New Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;