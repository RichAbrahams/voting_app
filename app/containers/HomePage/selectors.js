
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('homepage');

const selectLoading = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loading')
);

const selectDbPosition = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('dbPosition')
);

const selectLoadingError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loadingError')
);

const selectPolls = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('polls')
);

export {
  selectLoading,
  selectDbPosition,
  selectLoadingError,
  selectPolls,
};
