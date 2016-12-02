/* eslint arrow-body-style: 0 */


export function request(url, options) {
  const makeRequest = fetch(url, options);
  const timeOut = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, { success: false, error: 'request timed out' });
  });
  return Promise
    .race([makeRequest, timeOut])
    .then((data) => data.json())
    .catch((err) => err);
}
