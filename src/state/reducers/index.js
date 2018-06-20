import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BookmarksReducer from './reducers_bookmarks';

const allReducers = combineReducers({
  bookmarks: BookmarksReducer,
  form: formReducer,
});

export default allReducers;
