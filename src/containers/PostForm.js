import { connect } from 'react-redux';
import { camelizeKeys } from 'humps';
import { SubmissionError } from 'redux-form';

import BlogForm from 'components/ui/Blog/Form';

import { createPost, updatePost } from 'actions/Post';

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'can\'t be blank';
  }

  if (!values.author) {
    errors.author = 'can\'t be blank';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.title && values.title.length < 10) {
    warnings.title = 'seems a bit short';
  }

  return warnings;
};

const dispatchToProps = (dispatch) => ({
  save: (post) => (values) => {
    const action = post ? updatePost(values.id, values) : createPost(values);
    return dispatch(action).then(
      () => alert('Successfully submitted!'),
      (error) => {
        const errors = camelizeKeys(error.response.body)['errors'];
        throw new SubmissionError(errors);
      }
    );
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { post } = ownProps;
  const initialValues = post ? {
    id: post.id,
    title: post.title,
    text: post.text,
    author: post.meta.author
  } : {};

  const formProps = {
    initialValues,
    validate,
    warn,
    onSubmit: dispatchProps.save(post)
  };

  return Object.assign({}, stateProps, formProps);
};

export default connect(null, dispatchToProps, mergeProps)(BlogForm);
