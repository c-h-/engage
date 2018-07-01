import { generateCacheTTL } from "redux-cache";
import ActionTypes from "../action_types.json";

const initState = {};

/**
 * This reducer organizes the current state as reflected from the API by method
 */
export default function birdCurrent(state = initState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_FROM_CACHE:
    case ActionTypes.RECEIVE_BIRD_API: {
      if (
        !state[action.payload.method] ||
        action.payload.url !== state[action.payload.method].url
      ) {
        console.info(`${action.payload.method} current state updating`);
        return {
          ...state,
          [action.payload.method]: {
            data: action.payload.response,
            url: action.payload.url // keep track of what's currently selected
          }
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
