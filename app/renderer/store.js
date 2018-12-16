import { createStore } from "redux";
import rootReducer from "./reducers/houston-reducers";

const store = createStore(rootReducer);
export default store;