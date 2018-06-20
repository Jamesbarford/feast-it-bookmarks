import React from 'react';

import BookmarksList from './bookmarks-list/bookmarks-list';
import BookmarksForm from './bookmarks-form/bookmarks-form';

import './bookmarks-container.css';

// comonent acts as a wrapper of sorts for the form and the list of bookmarks
const BookmarksContainer = props => (
  <div className="bookmarks-container">
    <BookmarksForm {...props} />
    <BookmarksList {...props} />
  </div>
);

export default BookmarksContainer;
