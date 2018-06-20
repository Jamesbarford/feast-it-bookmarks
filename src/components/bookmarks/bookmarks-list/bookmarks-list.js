import React from 'react';
import _ from 'lodash';

import ListItem from './bookmarks-list-item/bookmarks-list-item';

import './bookmarks-list.css';
/*
  takes the application state as props and displays
  the current bookmarks by mapping through the object

  delete passes the function to its list child which
  will inturn signal to redux to remove said item

  index in map is the uuid created by action creator thus provides a unique key & id
*/
const BookmarksList = props => (
  <div className="bookmarks-list" style={{ display: props.bookmarks == null ? 'none' : '' }}>
    <h2 className="bookmarks-list-title">current bookmarks</h2>
    <ul>
      {_.map(props.bookmarks, (bookmark, index) => (
        <ListItem
          key={index}
          id={index}
          link={bookmark.bookmarkUrl}
          name={bookmark.bookmarkName}
          deleteBookmark={props.delete}
        />
      ))}
    </ul>
  </div>
);

export default BookmarksList;
