import { createSelector } from 'reselect';

const selectMyPollsDomain = () => (state) => state.get('myPolls');

const selectMyPolls = () => createSelector(
  selectMyPollsDomain(),
  (substate) => substate.get('polls')
);

const selectLoadingError = () => createSelector(
  selectMyPollsDomain(),
  (substate) => substate.get('loadingError')
);

const selectLoading = () => createSelector(
  selectMyPollsDomain(),
  (substate) => substate.get('loading')
);

const selectShowConfirm = () => createSelector(
  selectMyPollsDomain(),
  (substate) => substate.get('showConfirm')
);

const selectDeletePollError = () => createSelector(
  selectMyPollsDomain(),
  (substate) => substate.get('deletePollError')
);

export default selectMyPolls;
export {
  selectMyPolls,
  selectLoadingError,
  selectLoading,
  selectShowConfirm,
  selectDeletePollError,
};
