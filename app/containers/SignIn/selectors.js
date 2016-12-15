
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('signIn');

const selectSignInSuccess = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('signInSuccess')
);

export {
  selectSignInSuccess,
};
