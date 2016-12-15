import { createSelector } from 'reselect';

const selectNewPollDomain = () => (state) => state.get('newPoll');

const selectPollSaved = () => createSelector(
  selectNewPollDomain(),
  (substate) => substate.get('pollSaved')
);

export {
  selectPollSaved,
};
