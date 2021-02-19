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
      formVisibleOnPage: false,
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
    this.setState({
      formVisibleOnPage: false
    });
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
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
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
    } else if (this.state.formVisibleOnPage) {
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
  mainKegList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;