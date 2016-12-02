import { createSelector } from 'reselect';

const selectViewResultDomain = () => (state) => state.get('viewResult');

const selectLoadPollResultError = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('loadPollResultError')
);

const selectCreatedBy = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.getIn(['poll', 'createdBy'])
);

const selectQuestion = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.getIn(['poll', 'question'])
);

const selectOptions = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.getIn(['poll', 'options'])
);

const selectUrl = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.getIn(['poll', 'url'])
);

export {
  selectLoadPollResultError,
  selectCreatedBy,
  selectQuestion,
  selectOptions,
  selectUrl,
};
