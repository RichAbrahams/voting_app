/*
 *
 * Header
 *
 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import { connect } from 'react-redux';
import Logo from './opinu8.svg';
import Wrapper from './Wrapper';
import Navigation from 'components/Navigation';
import { selectUsername } from './selectors';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { logOut, getVotedFromLocalStorage, getTokenFromLocalStorage } from './actions';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getVotedFromLocalStorage();
    this.props.getTokenFromLocalStorage();
  }

  render() {
    return (
      <Wrapper>
        <div onClick={() => this.props.changePage('/')}>
          <img src={Logo} alt="Opinu - Logo" height="95" width="225" />
        </div>
        <Navigation
          username={this.props.username}
          changePage={this.props.changePage}
          logOut={this.props.logOut}
        />
      </Wrapper>
    );
  }
}

Header.propTypes = {
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
  logOut: React.PropTypes.func,
  getVotedFromLocalStorage: React.PropTypes.func,
  getTokenFromLocalStorage: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch(push(page)),
    logOut: () => dispatch(logOut()),
    getVotedFromLocalStorage: () => dispatch(getVotedFromLocalStorage()),
    getTokenFromLocalStorage: () => dispatch(getTokenFromLocalStorage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
