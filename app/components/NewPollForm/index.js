import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import Form from './Form';
import Button from './Button';
import Input from './Input';
import Span from './Span';
import Label from './Label';
import StyledDiv from './StyledDiv';
import LI from './LI';
import UL from './UL';
import RemoveWrapper from './RemoveWrapper';
import FormWrapper from './FormWrapper';

const validate = (values) => {
  const errors = {};
  if (!values.has('question')) {
    errors.question = 'Question is required';
  }
  if (!values.has('options') || values.get('options').toJS().length < 2) {
    errors.options = { _error: 'Please add two or more options' };
  } else {
    const optionsArrayErrors = [];
    values.get('options').forEach((option, optionIndex) => {
      const optionErrors = {};
      if (!option || Object.keys(option).length === 0) {
        optionErrors.option = 'Option is required';
        optionsArrayErrors[optionIndex] = optionErrors;
      }
    });
    if (optionsArrayErrors.length) {
      errors.options = optionsArrayErrors;
    }
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Label>{label}</Label>
    <StyledDiv>
      <Input {...input} type={type} placeholder={label} />
      {touched && error && <Span color="red">{error}</Span>}
    </StyledDiv>
  </div>
);

const renderOptions = ({ fields, meta: { error } }) => (
  <UL>
    {error && <Span color="Green">{error}</Span>}
    <LI>
      <Button color="#335685" type="button" onClick={() => fields.push({})}>Add Option</Button>
    </LI>
    {fields.map((options, index) =>
      <LI key={index}>
        <Field
          name={`${options}.option`}
          type="text"
          component={renderField}
          label={`Option ${index + 1}`}
        />
        <RemoveWrapper>
          <Button
            color="#db581f"
            type="button"
            title="Remove option"
            onClick={() => fields.remove(index)}
          >
            Remove
          </Button>
        </RemoveWrapper>
      </LI>
    )}
  </UL>
);


const NewPollForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          name="question"
          type="text"
          component={renderField}
          label="Poll Question"
        />
        <FieldArray
          name="options"
          component={renderOptions}
        />
        {error && <Span color="blue">{error}</Span>}
        <div>
          <Button color="#5e8c5e" type="submit" disabled={submitting}>Submit</Button>
          <Button color="#333" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </div>
      </Form>
    </FormWrapper>
  );
};

NewPollForm.propTypes = {
  error: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func,
  submitting: React.PropTypes.bool,
};

renderField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.object,
};

renderOptions.propTypes = {
  fields: React.PropTypes.object,
  meta: React.PropTypes.object,
};

export default reduxForm({
  form: 'newPoll',     // a unique identifier for this form
  validate,
})(NewPollForm);
