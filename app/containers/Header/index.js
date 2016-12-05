/*
 *
 * Header
 *
 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import { connect } from 'react-redux';
import Logo from './opinu4.svg';
import Wrapper from './Wrapper';
import Navigation from 'components/Navigation';
import { selectUsername } from './selectors';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div onClick={() => this.props.changePage('/')}>
          <img src={Logo} alt="react-boilerplate - Logo" />
        </div>
        <Navigation
          username={this.props.username}
          changePage={this.props.changePage}
        />
      </Wrapper>
    );
  }
}

Header.propTypes = {
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch(push(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
