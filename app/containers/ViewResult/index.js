/*
 *
 * ViewResult
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SectionWrapper from 'components/SectionWrapper';
import { createStructuredSelector } from 'reselect';
import { loadPollResult, resetChart } from './actions';
import { selectLoadPollResultError, selectCreatedBy, selectQuestion, selectOptions, selectFinishedLoading, selectTotalVotes } from './selectors';
import ViewResultContent from 'components/ViewResultContent';

export class ViewResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const url = this.props.params.slug;
    this.props.loadPollResult(url);
  }

  componentWillUnmount() {
    this.props.resetChart();
  }

  render() {
    return (
      <SectionWrapper>
        {this.props.finishedLoading && <ViewResultContent
          pollResultError={this.props.pollResultError}
          createdBy={this.props.createdBy}
          question={this.props.question}
          options={this.props.options}
          url={this.props.params.slug}
          totalVotes={this.props.totalVotes}
          loadPollResult={this.props.loadPollResult}
        />}
      </SectionWrapper>
    );
  }
}

ViewResult.propTypes = {
  loadPollResult: React.PropTypes.func,
  finishedLoading: React.PropTypes.bool,
  params: React.PropTypes.object,
  slug: React.PropTypes.string,
  pollResultError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  totalVotes: React.PropTypes.number,
  resetChart: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pollResultError: selectLoadPollResultError(),
  finishedLoading: selectFinishedLoading(),
  createdBy: selectCreatedBy(),
  question: selectQuestion(),
  options: selectOptions(),
  totalVotes: selectTotalVotes(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPollResult: (url) => dispatch(loadPollResult(url)),
    resetChart: () => dispatch(resetChart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewResult);
