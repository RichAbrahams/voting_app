/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */

import { SET_LOCAL_STORAGE } from '../containers/HomePage/constants';
import { updateVoted } from '../containers/HomePage/actions';

export default function ({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== SET_LOCAL_STORAGE) {
      return next(action);
    }
    const toSave = JSON.parse(localStorage.getItem('voted'));
    toSave.push(action.data);
    localStorage.setItem('voted', JSON.stringify(toSave));
    dispatch(updateVoted(toSave));
  };
}
