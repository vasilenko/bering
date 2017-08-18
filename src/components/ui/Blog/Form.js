/* eslint react/prop-types: 0 */

import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { Form, Input, TextArea, Label, Button } from 'semantic-ui-react';

const renderField = ({ input, label, meta: { touched, error, warning }, as: As = Input }) => (
  <Form.Field error={!!error}>
    <label>{label}</label>
    <As {...input} />
    {error && <Label basic color='red' pointing>{error}</Label>}
    {touched && warning && <Label basic color='orange' pointing>{warning}</Label>}
  </Form.Field>
);

const BlogForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <Form onSubmit={handleSubmit}>
    <Field label="Title" name="title" component={renderField} />
    <Field label="Text" name="text" component={renderField} as={TextArea} />
    <Field label="Author" name="author" component={renderField}  />

    <Form.Field>
      <Button type="submit" primary disabled={submitting}y>Submit</Button>
      <Button type="button" disabled={pristine || submitting} onClick={reset}>Reset values</Button>
    </Form.Field>
  </Form>
);

export default reduxForm({ form: 'blogForm' })(BlogForm);
