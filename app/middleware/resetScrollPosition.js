/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
/* eslint no-param-reassign: 0 */
import { NEXT_POLLS_LOADED, PREVIOUS_POLLS_LOADED } from '../containers/HomePage/constants';

export function nextScrollWindow({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== NEXT_POLLS_LOADED) {
      return next(action);
    }
    window.scrollTo(0, 0);
    next(action);
  };
}

export function previousScrollWindow({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== PREVIOUS_POLLS_LOADED) {
      return next(action);
    }
    window.scrollTo(0, 0);
    next(action);
  };
}
