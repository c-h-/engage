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
      let duration = 600000; // default TTL is 10 min in ms
      switch (action.payload.method) {
        case "areaNearby": {
          duration = 1800000; // 30 min
          break;
        }
        case "birdNearby": {
          duration = 120000; // 2 min
          break;
        }
      }
      const timeout = generateCacheTTL(duration);
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
