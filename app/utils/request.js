/* eslint arrow-body-style: 0 */

function makeFetch(url, options) {
  const makeRequest = fetch(url, options);
  const timeOut = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, { timeout: true });
  });
  return Promise.race([makeRequest, timeOut])
                .then((data) => data.json())
                .catch((err) => err);
}

export async function request(url, options) {
  let req;
  for (let i = 0; i < 3; i += 1) {
    req = await makeFetch(url, options);
    if (!req.timeout) {
      break;
    }
  }
  if (req.timeout) {
    req = {
      success: false,
      error: 'request timeout',
    };
  }
  return req;
}
