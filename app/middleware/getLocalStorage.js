/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */

import { GET_LOCAL_STORAGE } from '../containers/HomePage/constants';
import { updateVoted } from '../containers/HomePage/actions';

export default function ({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== GET_LOCAL_STORAGE) {
      return next(action);
    }
    const saved = JSON.parse(localStorage.getItem('voted')) || [];
    dispatch(updateVoted(saved));
  };
}
