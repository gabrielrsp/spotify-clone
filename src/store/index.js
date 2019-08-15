import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

const middlewares = [];

//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createStore(
  reducers,

  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

export default store;
