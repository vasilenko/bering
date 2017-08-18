import React from 'react';

import update from 'immutability-helper';

import { Form } from 'semantic-ui-react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        fullName: '',
        email: '',
        message: ''
      },
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { values } = this.state;
    const errors = Object.keys(values).reduce((memo, fieldName) => {
      memo[fieldName] = !this.isFieldValid(fieldName, values[fieldName]);
      return memo;
    }, {});

    if (Object.values(errors).some((v) => v)) {
      this.setState(
        update(this.state, {
          errors: { $set: errors }
        })
      );

      return;
    }

    alert(JSON.stringify(values));
  }

  handleChange(fieldName) {
    return (e) => {
      const value = e.target.value;

      this.setState(
        update(this.state, {
          values: { [fieldName]: { $set: value } },
          errors: { [fieldName]: { $set: !this.isFieldValid(fieldName, value) } }
        })
      );
    };
  }

  isFieldValid(fieldName, value) {
    switch (fieldName) {
      case 'fullName':
        return value.length > 0;
      case 'email':
        return /\S+@\S+/.test(value);
      case 'message':
        return value.length > 0;
    }
  }

  render() {
    const { values, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label="Your name"
          name="name"
          value={values.fullName}
          error={errors.fullName}
          onChange={this.handleChange('fullName')}
        />
        <Form.Input
          label="Email"
          name="email"
          value={values.email}
          error={errors.email}
          onChange={this.handleChange('email')}
        />
        <Form.TextArea
          label="Message"
          name="message"
          value={values.message}
          error={errors.message}
          onChange={this.handleChange('message')}
        />
        <Form.Button type="submit" primary>Submit</Form.Button>
      </Form>
    );
  }
}

export default ContactForm;
