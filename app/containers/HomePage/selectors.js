
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('homepage');

const selectLoading = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loading')
);

const selectCurrentPage = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('currentPage')
);

const selectLoadingError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loadingError')
);

const selectPolls = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('polls')
);

const selectPollCount = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('pollCount')
);

export {
  selectLoading,
  selectCurrentPage,
  selectLoadingError,
  selectPolls,
  selectPollCount,
};
