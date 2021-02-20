import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import editFormReducer from './edit-form-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainKegList: kegListReducer,
  selectedKeg: selectedKegReducer,
  editing: editFormReducer
});

export default rootReducer;