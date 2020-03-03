import { combineReducers } from "redux";
import blurReducer from './blurData'

const rootReducer = combineReducers({
    blurred:blurReducer
});
  
export default rootReducer;