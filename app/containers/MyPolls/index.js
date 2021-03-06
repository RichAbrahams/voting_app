/*
 *
 * MyPolls
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selectMyPolls, selectLoadingError, selectLoading, selectShowConfirm, selectDeletePollError } from './selectors';
import { loadUserPolls, setShowConfirm, deletePoll } from './actions';
import { createStructuredSelector } from 'reselect';
import SectionWrapper from 'components/SectionWrapper';
import MyPollsContent from 'components/MyPollsContent';
import { selectUsername } from '../Header/selectors';

export class MyPolls extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadUserPolls();
    this.props.setShowConfirm(null);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username === null) {
      this.props.changePage('/');
    }
  }

  render() {
    return (
      <SectionWrapper>
        {!this.props.loading && <MyPollsContent
          myPolls={this.props.myPolls}
          viewPoll={this.props.viewPoll}
          deletePoll={this.props.deletePoll}
          reload={this.props.loadUserPolls}
          setShowConfirm={this.props.setShowConfirm}
          showConfirm={this.props.showConfirm}
          deletePollError={this.props.deletePollError}
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
  setShowConfirm: React.PropTypes.func,
  showConfirm: React.PropTypes.string,
  deletePollError: React.PropTypes.bool,
  changePage: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  myPolls: selectMyPolls(),
  loadingError: selectLoadingError(),
  loading: selectLoading(),
  showConfirm: selectShowConfirm(),
  deletePollError: selectDeletePollError(),
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUserPolls: () => dispatch(loadUserPolls()),
    viewPoll: (id) => dispatch(push(`/viewresult/${id}`)),
    deletePoll: () => dispatch(deletePoll()),
    setShowConfirm: (url) => dispatch(setShowConfirm(url)),
    changePage: (page) => dispatch(push(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPolls);
