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
import MyPollsContent from 'components/MyPollsContent';

export class MyPolls extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadUserPolls();
  }

  render() {
    return (
      <SectionWrapper>
        {!this.props.loading && <MyPollsContent
          myPolls={this.props.myPolls}
          viewPoll={this.props.viewPoll}
          deletePoll={this.props.deletePoll}
          reload={this.props.loadUserPolls}
        />}
      </SectionWrapper>
    );
  }
}

MyPolls.propTypes = {
  loadUserPolls: React.PropTypes.func,
  loading: React.PropTypes.bool,
  myPolls: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myPolls: selectMyPolls(),
  loadingError: selectLoadingError(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUserPolls: () => dispatch(loadUserPolls()),
    viewPoll: () => {},
    deletePoll: () => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPolls);
