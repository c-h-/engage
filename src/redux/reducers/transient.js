import ActionTypes from "../action_types.json";

const initState = {
  appReady: false,
  mapRegion: {
    latitude: 34.008338,
    longitude: -118.481099,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
};

/**
 * Data that shouldn't be persisted across sessions can be saved here
 */
export default function transient(state = initState, action) {
  switch (action.type) {
    case ActionTypes.SET_APP_READY: {
      return {
        ...state,
        appReady: action.appReady
      };
    }
    case ActionTypes.SET_MAP_LOCATION: {
      return {
        ...state,
        mapRegion: action.payload.region
      };
    }
    default:
      return state;
  }
}
