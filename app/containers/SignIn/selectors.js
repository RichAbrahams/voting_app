import { createSelector } from 'reselect';

const selectSignInDomain = () => (state) => state.get('signIn');

const selectSignInSuccess = () => createSelector(
  selectSignInDomain(),
  (substate) => substate.get('signInSuccess')
);

export {
selectSignInSuccess,
};
