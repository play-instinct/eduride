import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import session from './session.reducer';

const mainReducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  session: session,

  
});
 
export default mainReducer;