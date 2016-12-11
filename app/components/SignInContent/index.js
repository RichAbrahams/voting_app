/**
*
* SignInContent
*
*/

import React from 'react';
import Wrapper from '../InnerWrapper';
import PageTitle from '../PageTitle';
import SignInForm from '../SignInForm';

function SignInContent(props) {
  const { submitSignIn } = props;
  return (
    <Wrapper>
      <PageTitle text="Sign In" />
      <SignInForm handleSubmit={submitSignIn} />
    </Wrapper>

  );
}

SignInContent.propTypes = {
  submitSignIn: React.PropTypes.func,
};

export default SignInContent;
