/* eslint  react/prop-types :0 */
/* eslint  no-confusing-arrow :0 */

import React from 'react';
import { reduxForm } from 'redux-form/immutable'; // <--- immutable import
import Form from './Form';
import StyledField from './StyledField';
import Button from './Button';
import Input from './Input';
import Span from './Span';
import Label from './Label';

const required = (value) => value ? undefined : 'Required';
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Label htmlFor={label}>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      <br />
      {touched && ((error && <Span>{error}</Span>) || (warning && <Span>{warning}</Span>))}
    </div>
  </div>
);

const SignInForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, error } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <StyledField
        name="email"
        type="email"
        component={renderField} label="Email"
        validate={email}
      />
      <StyledField
        name="password"
        type="password"
        component={renderField} label="Password"
        validate={required}
      />
      {error && <Span>{error}</Span>}
      <div>
        <Button type="submit" disabled={submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'SignInForm', // a unique identifier for this form
})(SignInForm);
