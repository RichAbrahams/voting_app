/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Header
      </div>
    );
  }
}

const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
