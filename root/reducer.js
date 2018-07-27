import { combineReducers } from 'redux';
import { userReducer } from '../components/user/UserReducer';

export default combineReducers({
  user: userReducer,
});
