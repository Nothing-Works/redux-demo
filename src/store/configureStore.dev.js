import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    immutableStateInvariantMiddleware(),
    logger,
    sagaMiddleware
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  store.close = () => store.dispatch(END);
  return store;
}
