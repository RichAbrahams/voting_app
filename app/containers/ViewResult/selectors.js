import { createSelector } from 'reselect';

const selectViewResultDomain = () => (state) => state.get('viewResult');

const selectLoadPollResultError = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('loadPollResultError')
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

const selectTotalVotes = () => createSelector(
  selectViewResultDomain(),
  (substate) => substate.get('options')
                        .map((item) => item.get('votes'))
                        .reduce((cont, item) => {
                          const val = cont + item;
                          return val;
                        }, 0)
);

export {
  selectLoadPollResultError,
  selectFinishedLoading,
  selectCreatedBy,
  selectQuestion,
  selectOptions,
  selectTotalVotes,
};
