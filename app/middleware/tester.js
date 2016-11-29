/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */

export default function ({ dispatch }) {
  return (next) => (action) => {
    console.log('my middleware', action);
    next(action); // can amend action first
    // or dispatch(action) instead of next
  };
}
