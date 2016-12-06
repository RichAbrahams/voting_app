/*
 *
 * MyPolls
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectMyPolls, selectLoadingError, selectLoading } from './selectors';
import { loadUserPolls } from './actions';
import { createStructuredSelector } from 'reselect';
import SectionWrapper from 'components/SectionWrapper';

export class MyPolls extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadUserPolls();
  }

  render() {
    return (
      <SectionWrapper>
      mypolls
      </SectionWrapper>
    );
  }
}

MyPolls.propTypes = {
  loadUserPolls: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myPolls: selectMyPolls(),
  loadingError: selectLoadingError(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUserPolls: () => dispatch(loadUserPolls()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPolls);
