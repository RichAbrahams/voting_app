/*
 *
 * NewPoll
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { savePoll, resetForm } from './actions';
import SectionWrapper from 'components/SectionWrapper';
import PageTitle from 'components/PageTitle';
import Wrapper from 'components/InnerWrapper';
import NewPollForm from 'components/NewPollForm';
import { selectUsername } from '../Header/selectors';
import { push } from 'react-router-redux';
import { selectPollSaved } from './selectors';

export class NewPoll extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username === null) {
      this.props.changePage('/');
    }
    if (nextProps.pollSaved) {
      this.props.changePage('/mypolls');
    }
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  handleSubmit(poll) {
    return new Promise((resolve, reject) => {
      this.props.savePoll({ resolve, reject, poll });
    });
  }

  render() {
    return (
      <SectionWrapper>
        <Wrapper>
          <PageTitle text="Create Poll" />
          <NewPollForm onSubmit={this.handleSubmit} />
        </Wrapper>
      </SectionWrapper>
    );
  }
}

NewPoll.propTypes = {
  savePoll: React.PropTypes.func,
  changePage: React.PropTypes.func,
  resetForm: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  pollSaved: selectPollSaved(),
});

function mapDispatchToProps(dispatch) {
  return {
    savePoll: (data) => dispatch(savePoll(data)),
    changePage: (page) => dispatch(push(page)),
    resetForm: () => dispatch(resetForm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);
