
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('signUp');

const selectSignUpSuccess = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('signUpSuccess')
);

export {
  selectSignUpSuccess,
};
