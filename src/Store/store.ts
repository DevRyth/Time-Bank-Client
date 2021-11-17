import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const reducer = combineReducers({});

const sagaMiddleware = createSagaMiddleware({});

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

export type AppState = ReturnType<typeof store.getState>;

export const store = createStore(reducer, devTools);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
