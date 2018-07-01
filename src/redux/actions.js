import { checkCacheValid } from "redux-cache";
import Bird from "../network/Bird";
import actionTypes from "./action_types.json";

// automatically populate available endpoints
const endpoints = Object.keys(Bird.endpoints);
export const apiEndpoints = {};
endpoints.forEach(key => (apiEndpoints[key] = key));

/**
 * Processes the API cache and orients current state from cache or fresh response
 * @param {Object} reduxArgs - the dispatch and getState redux functions
 * @param {String} method - the API method to call
 * @param {Object} [options] - any options including query parameters to provide
 */
function processCache(reduxArgs, method, options) {
  const { dispatch, getState } = reduxArgs;
  const cacheSubKey = Bird.getConfiguredPath(method, options);
  let cachedResource;
  // check "bird" reducer cache validity
  const isCacheValid = checkCacheValid(getState, "birdCache", {
    cacheKey: "cacheTTLs",
    accessStrategy: (state, reducerKey, cacheKey) => {
      // since we're already accessing state, grab the resource itself too
      cachedResource = state[reducerKey]["responseCache"][cacheSubKey];
      return state[reducerKey][cacheKey][cacheSubKey];
    }
  });
  if (isCacheValid) {
    console.info(`${method} cache is fresh, ignoring request`);
    // use our cachedResource to update the currently selected state
    dispatch({
      type: actionTypes.UPDATE_CURRENT_FROM_CACHE,
      payload: {
        method,
        url: cacheSubKey,
        response: cachedResource
      }
    });
    return null;
  }
  console.log(`${method} cache is stale, forwarding request`);
  return Bird.callAPI(method, options).then(data => {
    dispatch({
      type: actionTypes.RECEIVE_BIRD_API,
      payload: data
    });
  });
}

/**
 * Call Bird API
 */
export function getBirdData(method, options) {
  const configuredOptions = options || {
    query: {
      latitude: 34.008338,
      longitude: -118.481099,
      radius: 3459.942724306729
    }
  };
  return (dispatch, getState) => {
    processCache({ dispatch, getState }, method, configuredOptions);
  };
}
