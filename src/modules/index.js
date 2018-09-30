import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import NewsReducer from './News';

export default combineReducers({
  news: NewsReducer,
  session: sessionReducer
});