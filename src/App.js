import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBookmarks, deleteBookmark } from './state/actions';
import BookmarksContainer from './components/bookmarks/bookmarks-container';

import './App.css';

// this is the only component concerned with application level state and commuincates to redux

class App extends Component {
  componenDidMount() {
    this.props.fetchBookmarks();
  }
  render() {
    return (
      <div className="App">
        <BookmarksContainer bookmarks={this.props.bookmarks} delete={this.props.deleteBookmark} />
      </div>
    );
  }
}

// grab state and name it bookmarks
function mapStateToProps(state) {
  return { bookmarks: state.bookmarks };
}

//  connect to redux store
export default connect(mapStateToProps, { fetchBookmarks, deleteBookmark })(App);
