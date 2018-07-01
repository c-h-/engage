import { combineReducers } from "redux";

import transient from "./transient";
import birdCache from "./birdCache";
import birdCurrent from "./birdCurrent";

export default combineReducers({
  birdCurrent,
  birdCache,
  transient
});
