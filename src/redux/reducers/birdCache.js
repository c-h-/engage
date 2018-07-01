import { generateCacheTTL } from "redux-cache";
import ActionTypes from "../action_types.json";

const initState = {
  cacheTTLs: {},
  responseCache: {}
};

/**
 * This reducer caches unique API calls
 */
export default function birdCache(state = initState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_BIRD_API: {
      const timeout = generateCacheTTL();
      return {
        ...state,
        cacheTTLs: {
          ...state.cacheTTLs,
          [action.payload.url]: timeout // generate a cache TTL
        },
        responseCache: {
          ...state.responseCache,
          [action.payload.url]: action.payload.response
        }
      };
    }
    default:
      return state;
  }
}
