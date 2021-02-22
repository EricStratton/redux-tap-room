import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ 
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: parseInt(event.target.price.value), 
      abv: parseInt(event.target.abv.value), 
      stock: parseInt(event.target.stock.value), 
      id: v4() });
  }

  return (
    <>
      <ReusableForm formSubmissionHandler={ handleNewKegFormSubmission }
      buttonText="Add New Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;