import React from 'react';

import './bookmarks-list-item.css';

/*
  displays name of bookmark link and its url

  delete will delete clicked item from list and redux store
*/

const ListItem = props => (
  <li className="list-item">
    <a className="list-link" href={props.link}>{props.name}</a>
    <button className="list-button" onClick={() => { props.deleteBookmark(props.id); }}>delete</button>
  </li>
);

export default ListItem;
