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

export default selectMyPolls;
export {
  selectMyPolls,
  selectLoadingError,
  selectLoading,
};
