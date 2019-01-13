import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import streamsReducers from './streamsReducers';
import authReucers from './authReducers';

export default combineReducers({
      auth:authReucers,
      form:reducer,
      streams:streamsReducers
});