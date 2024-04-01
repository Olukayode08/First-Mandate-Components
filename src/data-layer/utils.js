
import { useMutation, useQuery } from 'react-query';
import { stripLeadingSlash } from '../utils/string';

export const API_URL = process.env.REACT_APP_BACKEND_BASE_URL
const token = localStorage.getItem('token')

/**
 * Returns the queryKey for a react-query request. The key is obtained by splitting the url into fragments (hence creating a unique key for each request). The params is only helpful when we want to cache data
 * @param {String} url
 * @param {object} params
 * @returns {(String | Object)[]}
 */
export const getReactQueryKey = (url, params) => {
  return [...url.split('/').filter((fragment) => !!fragment), params || {}];
};

/**
 * A handy method to obtain the queryFn to be used in useQuery or useMutation
 * @param path
 * @param params
 * @param token
 * @param headers
 * @param method
 * @returns {function(*): Promise<Response>}
 */
export const getQueryFn = ({ path, params, headers, method }) => {
  // The returned function takes the data because that often needs to be set at calling time.
  return async (data) => {
    const urlObj = new URL(`${API_URL}/${stripLeadingSlash(path)}`);
    //
    Object.entries(params || {}).forEach(([key, value]) => {
      if (![null, undefined].includes(value)) urlObj.searchParams.set(key, value);
    });
    //
    const url = urlObj.toString();

    const _headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token && `Bearer ${token}`,
      ...(headers || {})
    };
    
    const response = await fetch(url, {
      method,
      body: data && JSON.stringify(data),
      headers: _headers
    });

    if (!response.ok) {
      const error = await response.json();
      throw {
        status: response.status,
        ...error
      };
    }

    return response.json()
  };
};

export const useFirstMandateQuery = (
  path,
  {
    method = 'GET',
    queryKey,
    requireAuth = true,
    params,
    data,
    headers,
    queryFn,
    ...reactQueryOptions
  } = {}
) => {


  const _queryFn = () =>
    getQueryFn({ path, params, headers, method })(data);

  const enabled = reactQueryOptions?.enabled === undefined || Boolean(reactQueryOptions?.enabled);

  return useQuery({
    queryKey: queryKey || getReactQueryKey(path, params || data),
    queryFn: queryFn || _queryFn,
    ...(reactQueryOptions || {}),
    enabled: (requireAuth ? !!token : true) && enabled
  });
};

export const useFirstMandateMutation = (
  path,
  {
    method = 'POST',
    mutationKey,
    params,
    headers,
    mutationFn,
    ...reactQueryOptions
  } = {}
) => {
  const _queryFn = getQueryFn({ path, params, headers, method});

  return useMutation({
    mutationKey: mutationKey || getReactQueryKey(path, params),
    mutationFn: mutationFn || _queryFn,
    ...(reactQueryOptions || {})
  });
};
