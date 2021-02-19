import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, stock } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      price,
      stock,
      abv
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    this.setState({ selectedKeg: selectedKeg })
  }

  handleEditKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, stock } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      price,
      stock,
      abv
    }
    dispatch(action); 
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handlePoursInKeg = (kegToPour) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, stock } = kegToPour;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      price,
      abv,
      stock: stock - 1 
    }
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
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
      };
    }
  

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={ this.state.selectedKeg } onEditKeg={ this.handleEditKegInList } />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={ this.state.selectedKeg } onClickingPour={ this.handlePoursInKeg } onClickingEdit={ this.handleEditClick } onClickingDelete={ this.handleDeletingKeg }/>
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
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;