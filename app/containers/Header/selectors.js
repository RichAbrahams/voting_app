import { createSelector } from 'reselect';

const selectHeaderDomain = () => (state) => state.get('header');

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username'),
);

const selectToken = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('token'),
);

const selectVoted = () => createSelector(
  selectHeaderDomain(),
  (homeState) => homeState.get('voted')
);

export {
  selectUsername,
  selectToken,
  selectVoted,
};
