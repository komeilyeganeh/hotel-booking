import { createStore } from "redux";
import ToggleMenuReducer from "../reducers/ToggleMenu";


const store = createStore(ToggleMenuReducer);

export default store;