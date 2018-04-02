import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
 
const mainReducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
});
 
export default mainReducer;