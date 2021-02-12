import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, stock: event.target.stock.value, id: keg.id })
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;