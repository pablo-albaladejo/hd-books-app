import apiFetch from './apiFetch'
import Config from '../../config.json'

export const getBook = (data = {}) =>
   apiFetch({
    baseUrl: data.baseUrl,
    token: data.token,
    endPoint: encodeURI(Config.API.ENDPOINT.BOOK + '/' + data.id),
    method: Config.API.ENDPOINT.GET,
    body: data.body,
    headers: data.headers
  });