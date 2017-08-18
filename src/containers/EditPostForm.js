import { connect } from 'react-redux';
import { camelizeKeys } from 'humps';
import { SubmissionError } from 'redux-form';

import BlogForm from 'components/ui/Blog/Form';

import { updatePost } from 'actions/Post';

const dispatchToProps = (dispatch) => ({
  validate: (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'can\'t be blank';
    }

    if (!values.author) {
      errors.author = 'can\'t be blank';
    }

    return errors;
  },
  warn: (values) => {
    const warnings = {};

    if (values.title && values.title.length < 10) {
      warnings.title = 'seems a bit short';
    }

    return warnings;
  },
  onSubmit: (values) => (
    dispatch(updatePost(values.id, values)).then(
      () => alert('Successfully submitted!'),
      (error) => {
        const errors = camelizeKeys(error.response.body)['errors'];
        throw new SubmissionError(errors);
      }
    )
  )
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { post } = ownProps;

  const formProps = {
    initialValues: {
      id: post.id,
      title: post.title,
      text: post.text,
      author: post.meta.author
    }
  };

  return Object.assign({}, ownProps, stateProps, dispatchProps, formProps);
};

export default connect(null, dispatchToProps, mergeProps)(BlogForm);
