/*
 *
 * ViewResult
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SectionWrapper from 'components/SectionWrapper';
import { createStructuredSelector } from 'reselect';
import { loadPollResult } from './actions';
import { selectLoadPollResultError, selectCreatedBy, selectQuestion, selectOptions, selectUrl } from './selectors';
import ViewResultContent from 'components/ViewResultContent';

export class ViewResult extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const url = this.props.params.slug;
    this.props.loadPollResult(url);
  }

  render() {
    return (
      <SectionWrapper>
        <ViewResultContent
          pollResultError={this.props.pollResultError}
          createdBy={this.props.createdBy}
          question={this.props.question}
          options={this.props.options}
          url={this.props.params.slug}
          loadPollResult={this.props.loadPollResult}
        />
      </SectionWrapper>
    );
  }
}

ViewResult.propTypes = {
  loadPollResult: React.PropTypes.func,
  params: React.PropTypes.object,
  slug: React.PropTypes.string,
  pollResultError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pollResultError: selectLoadPollResultError(),
  createdBy: selectCreatedBy(),
  question: selectQuestion(),
  options: selectOptions(),
  url: selectUrl(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPollResult: (url) => dispatch(loadPollResult(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewResult);
