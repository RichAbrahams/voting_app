/*
 *
 * SignIn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSignIn from './selectors';
import SectionWrapper from 'components/SectionWrapper';
import SignInContent from 'components/SignInContent';

export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SectionWrapper>
        <SignInContent />
      </SectionWrapper>

    );
  }
}

const mapStateToProps = selectSignIn();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
