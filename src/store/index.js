import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";

import { combineEpics, createEpicMiddleware } from "redux-observable";

import { epics } from "./flights/epics";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const rootEpic = combineEpics(...epics);

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(axiosInstance),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(thunk, epicMiddleware, ...requestsMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);
  return store;
};
