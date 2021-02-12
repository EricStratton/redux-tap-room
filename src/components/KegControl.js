import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg })
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
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
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={ this.state.selectedKeg }/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={ this.handleAddingNewKegToList } />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={ this.state.mainKegList } onKegSelection={ this.handleChangingSelectedKeg }/>
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

export default KegControl;