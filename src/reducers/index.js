import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import post from './Post';

export default combineReducers({
  post,
  form: formReducer
});
