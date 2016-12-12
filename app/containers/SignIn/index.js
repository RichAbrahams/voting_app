import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SectionWrapper from 'components/SectionWrapper';
import { signIn } from './actions';
import SignInForm from 'components/SignInForm';
import Wrapper from 'components/InnerWrapper';
import PageTitle from 'components/PageTitle';


export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(credentials) {
    return new Promise((resolve, reject) => {
      this.props.signIn({ resolve, reject, credentials });
    });
  }

  render() {
    return (
      <SectionWrapper>
        <Wrapper>
          <PageTitle text="Sign In" />
          <SignInForm onSubmit={this.handleSubmit} />
        </Wrapper>
      </SectionWrapper>
    );
  }
}

SignIn.propTypes = {
  signIn: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
