import apiFetch from './apiFetch'
import Config from '../../config.json'

export const getBook = (data = {}) =>
  apiFetch({
    baseUrl: data.baseUrl,
    token: data.token,
    endPoint: encodeURI(Config.API.ENDPOINT.BOOK + '/' + data.id),
    method: Config.API.METHOD.GET,
    params: data.params,
    headers: data.headers
  });

export const postBook = (data = {}) =>
  apiFetch({
    baseUrl: data.baseUrl,
    token: data.token,
    endPoint: encodeURI(Config.API.ENDPOINT.BOOK + '/' + data.id + '/lease/' + data.action),
    method: Config.API.METHOD.POST,
    body: data.body,
    headers: data.headers
  });

