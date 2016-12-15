/*
 *
 * ViewPoll
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SectionWrapper from 'components/SectionWrapper';
import { createStructuredSelector } from 'reselect';
import { loadPoll, saveVote, resetComponent } from './actions';
import { selectLoadPollError, selectCreatedBy, selectQuestion, selectOptions, selectId, selectFinishedLoading, selectVoteSaved } from './selectors';
import ViewPollContent from 'components/ViewPollContent';
import { selectUsername } from '../Header/selectors';

export class ViewPoll extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const url = this.props.params.slug;
    this.props.loadPoll(url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      this.props.changePage('/');
    }
  }

  componentWillUnmount() {
    this.props.resetComponent();
  }

  render() {
    return (
      <SectionWrapper>
        {this.props.finishedLoading && <ViewPollContent
          loadPollError={this.props.loadPollError}
          createdBy={this.props.createdBy}
          question={this.props.question}
          options={this.props.options}
          url={this.props.params.slug}
          id={this.props.id}
          loadPoll={this.props.loadPoll}
          saveVote={this.props.saveVote}
          voteSaved={this.props.voteSaved}
          loadResultPage={this.props.loadResultPage}
        />}
      </SectionWrapper>
    );
  }
}

ViewPoll.propTypes = {
  loadPoll: React.PropTypes.func,
  finishedLoading: React.PropTypes.bool,
  params: React.PropTypes.object,
  slug: React.PropTypes.string,
  loadPollError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  id: React.PropTypes.string,
  saveVote: React.PropTypes.func,
  voteSaved: React.PropTypes.bool,
  loadResultPage: React.PropTypes.func,
  resetComponent: React.PropTypes.func,
  changePage: React.PropTypes.func,
  username: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loadPollError: selectLoadPollError(),
  finishedLoading: selectFinishedLoading(),
  createdBy: selectCreatedBy(),
  question: selectQuestion(),
  options: selectOptions(),
  id: selectId(),
  voteSaved: selectVoteSaved(),
  username: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPoll: (url) => dispatch(loadPoll(url)),
    saveVote: (vote) => dispatch(saveVote(vote)),
    loadResultPage: (url) => dispatch(push(`/viewresult/${url}`)),
    resetComponent: () => dispatch(resetComponent()),
    changePage: (page) => dispatch(push(page)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
