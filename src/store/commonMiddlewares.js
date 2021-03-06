import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import { mockApiMiddleware } from '../mockApi';
import headerMiddleware from './../middleware/headerMiddleware';

export const basicMiddleware = [
  rootReducer,
];

export const middlewaresToApply = [
  thunk,
  mockApiMiddleware,
  headerMiddleware,
  apiMiddleware,
  routerMiddleware(browserHistory),
];
