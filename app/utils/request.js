/* eslint arrow-body-style: 0 */


import 'whatwg-fetch';

function delayPromise(delay) {
  return (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
}

function parseJSON(response) {
  return response.json();
}

export function requestWithDelay(url, options) {
  return fetch(url, options)
  .then(parseJSON)
  .then(delayPromise(1000))
  .then((data) => data)
  .catch(() => { return { success: false, error: 'could not connect to server' }; });
}

export function request(url, options) {
  return fetch(url, options)
    .then(parseJSON)
    .then((data) => data)
    .catch(() => { return { success: false, error: 'could not connect to server' }; });
}
