import { createSelector } from 'reselect';

const selectViewResultDomain = () => (state) => state.get('viewPoll');

const selectLoadPollError = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('loadPollError')
);

const selectFinishedLoading = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('finishedLoading')
);

const selectCreatedBy = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('createdBy')
);

const selectQuestion = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('question')
);

const selectOptions = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('options')
);

const selectId = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('id')
);

const selectVoteSaved = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('voteSaved')
);


export {
  selectLoadPollError,
  selectFinishedLoading,
  selectCreatedBy,
  selectQuestion,
  selectOptions,
  selectId,
  selectVoteSaved,
};
