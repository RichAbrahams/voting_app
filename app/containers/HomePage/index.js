/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectLoading, selectLoadingError, selectPolls } from './selectors';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from 'components/LoadingIndicator';
import SectionWrapper from 'components/SectionWrapper';
import { loadNextPolls, loadPreviousPolls } from './actions';
import HomePageContent from 'components/HomePageContent';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadNextPolls();
  }

  render() {
    return (
      <SectionWrapper>
        HomePage
        {this.props.loading && <LoadingIndicator loading={this.props.loading} />}
        {!this.props.loading && <HomePageContent
          loadingError={this.props.loadingError}
          polls={this.props.polls}
          loadNextPolls={this.props.loadNextPolls}
          loadPreviousPolls={this.props.loadPreviousPolls}
        />}
      </SectionWrapper>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  loadingError: React.PropTypes.bool,
  loadNextPolls: React.PropTypes.func,
  loadPreviousPolls: React.PropTypes.func,
  polls: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  loadingError: selectLoadingError(),
  polls: selectPolls(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadNextPolls: () => dispatch(loadNextPolls()),
    loadPreviousPolls: () => dispatch(loadPreviousPolls()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
