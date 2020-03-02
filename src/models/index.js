import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "./root-reducer";
import allEffects from "./root-effect";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(allEffects);

export default store;
