import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SectionWrapper from 'components/SectionWrapper';
import {} from './actions';
import SignInForm from 'components/SignInForm';

export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(credentials) {
    console.log(credentials.toJS()); // eslint-disable-line
  }

  render() {
    return (
      <SectionWrapper>
        <SignInForm onSubmit={this.handleSubmit} />
      </SectionWrapper>
    );
  }
}

SignIn.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
