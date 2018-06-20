import uuid from 'uuid/v1';

// if this were to grow I would split out into types.js
export const CREATE_BOOKMARK = 'create_bookmark';
export const DELETE_BOOKMARK = 'delete_bookmark';
export const FETCH_BOOKMARKS = 'fetch_bookmarks';

//  creates a bookmark with an unique id
export function createBookmark(value) {
  return {
    type: CREATE_BOOKMARK,
    payload: value,
    bookmarkId: uuid(),
  };
}

// grabs current bookmarks from the store
export function fetchBookmarks() {
  return {
    type: FETCH_BOOKMARKS,
  };
}

// deletes bookmarks
export function deleteBookmark(bookmarkId) {
  return {
    type: DELETE_BOOKMARK,
    id: bookmarkId,
  };
}
