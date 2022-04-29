import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers/rootReducer";

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

//Используется для сохранения store в LocalStorage
export const persistor = persistStore(store);