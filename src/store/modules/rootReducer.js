import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

const rootReducers = combineReducers({
  auth,
  user,
});

export default rootReducers;
