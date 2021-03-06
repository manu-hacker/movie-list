import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(thunk));

export default store;
