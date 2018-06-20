import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBookmark } from '../../../state/actions';

import Input from '../form-elements/input/input';
import FormButton from '../form-elements/button/button';

import './bookmarks-form.css';

class BookmarksForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //  fires the action creator to make a bookmark
  onSubmit(bookmark) {
    this.props.createBookmark(bookmark);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="bookmarks-form">
        <h2>create bookmark</h2>
        <Field
          name="bookmarkName"
          type="text"
          placeholder="name of bookmark"
          required
          component={Input}
        />
        <Field
          name="bookmarkUrl"
          type="text"
          placeholder="url of bookmark"
          required
          component={Input}
        />
        <FormButton>
          Submit
        </FormButton>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmarks,
  };
}

/*
  form validation to show error messages

  had to silence linting for the regex as:
  1) line is too long
  2) asks to delete escaped characters which breaks the regex
  3) - I did not write the regex expression.
*/

function validate(values) {
  const errors = {};
  if (!values.bookmarkName) {
    errors.bookmarkName = 'please enter valid name';
  }
  if (values.bookmarkUrl && !/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(values.bookmarkUrl)) { // eslint-disable-line
    errors.bookmarkUrl = 'please enter valid url';
  }
  return errors;
}

// connect form to store to handle creation of bookmarks

export default reduxForm({
  form: 'Bookmarks Form',
  validate,
})(connect(
  mapStateToProps,
  { createBookmark },
)(BookmarksForm));
