import { createSelector } from 'reselect';

const selectHeaderDomain = () => (state) => state.get('header');

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username'),
);

export {
  selectUsername,
};
