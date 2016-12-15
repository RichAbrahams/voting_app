/*
 *
 * SignUp
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSignUpSuccess } from './selectors';
import { selectUsername } from '../Header/selectors';
import SectionWrapper from 'components/SectionWrapper';
import { signUp, resetSignUp } from './actions';
import SignUpForm from 'components/SignUpForm';
import Wrapper from 'components/InnerWrapper';
import PageTitle from 'components/PageTitle';
import { push } from 'react-router-redux';

export class SignUp extends React.PureComponent { // eslint-disable-line
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.username) {
      this.props.changePage('/');
    }
    this.props.resetSignUp();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signUpSuccess || nextProps.username) {
      this.props.changePage('/');
    }
  }

  handleSubmit(credentials) {
    return new Promise((resolve, reject) => {
      this.props.signUp({ resolve, reject, credentials });
    });
  }

  render() {
    return (
      <SectionWrapper>
        <Wrapper>
          <PageTitle text="Sign Up" />
          <SignUpForm onSubmit={this.handleSubmit} />
        </Wrapper>
      </SectionWrapper>
    );
  }
}


SignUp.propTypes = {
  signUp: React.PropTypes.func,
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
  resetSignUp: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signUpSuccess: selectSignUpSuccess(),
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
    resetSignUp: () => dispatch(resetSignUp()),
    changePage: (page) => dispatch(push(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
