/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selectLoading, selectLoadingError, selectPolls, selectPollCount, selectCurrentPage, selectVoted } from './selectors';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from 'components/LoadingIndicator';
import SectionWrapper from 'components/SectionWrapper';
import { loadPolls, loadNextPolls, loadPreviousPolls } from './actions';
import HomePageContent from 'components/HomePageContent';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadPolls();
  }

  render() {
    return (
      <SectionWrapper>
        HomePage
        {this.props.loading && <LoadingIndicator loading={this.props.loading} />}
        {!this.props.loading && <HomePageContent
          loadingError={this.props.loadingError}
          polls={this.props.polls}
          pollCount={this.props.pollCount}
          loadNextPolls={this.props.loadNextPolls}
          loadPreviousPolls={this.props.loadPreviousPolls}
          currentPage={this.props.currentPage}
          voted={this.props.voted}
          viewPoll={this.props.viewPoll}
          viewResult={this.props.viewResult}
        />}
      </SectionWrapper>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  loadingError: React.PropTypes.bool,
  loadPolls: React.PropTypes.func,
  loadNextPolls: React.PropTypes.func,
  loadPreviousPolls: React.PropTypes.func,
  polls: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  pollCount: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
  currentPage: React.PropTypes.number,
  voted: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  viewResult: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  loadingError: selectLoadingError(),
  polls: selectPolls(),
  pollCount: selectPollCount(),
  currentPage: selectCurrentPage(),
  voted: selectVoted(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPolls: () => dispatch(loadPolls()),
    loadNextPolls: () => dispatch(loadNextPolls()),
    loadPreviousPolls: () => dispatch(loadPreviousPolls()),
    viewPoll: (id) => dispatch(push(`/viewpoll/${id}`)),
    viewResult: (id) => dispatch(push(`/viewresult/${id}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
