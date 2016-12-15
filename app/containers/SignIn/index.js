import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signIn, resetSignIn } from './actions';
import { selectSignInSuccess } from './selectors';
import { selectUsername } from '../Header/selectors';
import SignInForm from 'components/SignInForm';
import Wrapper from 'components/InnerWrapper';
import SectionWrapper from 'components/SectionWrapper';
import PageTitle from 'components/PageTitle';
import { push } from 'react-router-redux';


export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.username) {
      this.props.changePage('/');
    }
    this.props.resetSignIn();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signInSuccess || nextProps.username) {
      this.props.changePage('/');
    }
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
          {this.props.username}
          <PageTitle text="Sign In" />
          <SignInForm onSubmit={this.handleSubmit} />
        </Wrapper>
      </SectionWrapper>
    );
  }
}

SignIn.propTypes = {
  signIn: React.PropTypes.func,
  resetSignIn: React.PropTypes.func,
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signInSuccess: selectSignInSuccess(),
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    resetSignIn: () => dispatch(resetSignIn()),
    changePage: (page) => dispatch(push(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
