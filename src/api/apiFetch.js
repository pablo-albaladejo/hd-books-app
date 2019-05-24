//import 'cross-fetch/polyfill';
import Config from '../../config.json';

/* eslint no-console: 0 */
export default
  ({ baseUrl = null, endPoint, method, token = null, body = null, params = null, headers = null }) =>
    new Promise((resolve, reject) => {

      let defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      token && (defaultHeaders['Authorization'] = `Bearer ${token}`);

      const opts = {
        method,
        headers: {
          ...defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : null
      };

      const urlParms = params ?
        '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
        :
        '';

      const uri = `${baseUrl || Config.API.BASE_URL}${endPoint}${urlParms}`;

      console.log("hd-books-app::apiFetch::request", {
        opts,
        uri,
      });

      fetch(uri, opts)
        .then(response => {
          if (response.ok) {
            response.json().then(jsonResponse => {
              console.log('hd-books-app::apiFetch::jsonResponse', jsonResponse);
              resolve(jsonResponse);
            }).catch(reject);
          } else {
            response.json()
              .then(errJson => {
                console.log('hd-books-app::apiFetch::errJson', errJson);
                reject({ status: response.status, error: ((errJson.error) ? errJson.error : errJson) })
              }).catch(reject);
          }
        })
        .catch((error) => {
          console.log('hd-books-app::apiFetch::error', error);
          reject(error);
        });
    });
