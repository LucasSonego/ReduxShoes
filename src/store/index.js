import { createStore } from "redux";

import reducers from "./modules/rootReducer";

const enhaner =
  process.env.NODE_ENV === "development" ? console.tron.createEnhancer() : null;

const store = createStore(reducers, enhaner);

export default store;
