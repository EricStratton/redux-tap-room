import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.props.mainKegList[id];
    const { dispatch } = this.props;
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleEditKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2); 
    if(this.props.editing) {
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
  }

  handlePoursInKeg = (kegToPour) => {
    const { dispatch } = this.props;
    const action = a.pourFromKeg(kegToPour);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
    if(this.props.editing) {
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.deselectKeg();
      dispatch(action);
      if(this.props.editing) {
        const action2 = a.toggleEdit();
        dispatch(action2);
      }
    } else {
      const { dispatch } = this.props;
      const action3 = a.toggleForm();
      dispatch(action3);
      };
    }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if (this.props.editing) {
      currentlyVisibleState = <EditKegForm keg={ this.props.selectedKeg } onEditKeg={ this.handleEditKegInList } />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={ this.props.selectedKeg } onClickingPour={ this.handlePoursInKeg } onClickingEdit={ this.handleEditClick } onClickingDelete={ this.handleDeletingKeg }/>
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={ this.handleAddingNewKegToList } />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={ this.props.mainKegList } onKegSelection={ this.handleChangingSelectedKeg }/>
      buttonText = "Add Keg";
    }
    return (
      <>
        { currentlyVisibleState }
        <button onClick={ this.handleClick }>{ buttonText }</button>
      </>
    )
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;