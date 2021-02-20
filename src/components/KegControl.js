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
    this.state = {
      // selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => { // Am I properly handling this selected keg? // Feels like yes but details view still not working //
    const selectedKeg = this.props.mainKegList[id];
    const { dispatch } = this.props;
    console.log(selectedKeg);
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleEditKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action); 
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handlePoursInKeg = (kegToPour) => {
    const { dispatch } = this.props;
    const action = a.pourFromKeg(kegToPour);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true })
  }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props; // Unsure at best about this. //
      const action = a.selectKeg();
      dispatch(action);
      this.setState({
        // selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      };
    }
  

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={ this.state.selectedKeg } onEditKeg={ this.handleEditKegInList } />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      // Details view is not currently working. // Related to how keg is being passed down as a prop? // Related to how the handleClick method is refering to selectedKeg action? //
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
  selectedKeg: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;