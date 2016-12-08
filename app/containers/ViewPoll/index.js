/*
 *
 * ViewPoll
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SectionWrapper from 'components/SectionWrapper';
import { createStructuredSelector } from 'reselect';
import { loadPoll, saveVote } from './actions';
import { selectLoadPollError, selectCreatedBy, selectQuestion, selectOptions, selectId, selectFinishedLoading } from './selectors';
import ViewPollContent from 'components/ViewPollContent';

export class ViewPoll extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const url = this.props.params.slug;
    this.props.loadPoll(url);
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
};

const mapStateToProps = createStructuredSelector({
  loadPollError: selectLoadPollError(),
  finishedLoading: selectFinishedLoading(),
  createdBy: selectCreatedBy(),
  question: selectQuestion(),
  options: selectOptions(),
  id: selectId(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPoll: (url) => dispatch(loadPoll(url)),
    saveVote: (vote) => dispatch(saveVote(vote)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
