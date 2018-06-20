import {
  CREATE_BOOKMARK,
  FETCH_BOOKMARKS,
  DELETE_BOOKMARK,
} from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case CREATE_BOOKMARK:
      // [action.payload.bookmarkId] -> make a new key on this object with that value.
      // then set the value to action.payload
      return { ...state, [action.bookmarkId]: action.payload };
    case FETCH_BOOKMARKS:
      // just return state
      return state;
    case DELETE_BOOKMARK:
      // deletes element with corresponding  -> return state after
      if (action.id) {
        const nextState = Object.assign({}, state);
        delete nextState[action.id];
        return nextState;
      }
      return state;
    default:
      return state;
  }
}
