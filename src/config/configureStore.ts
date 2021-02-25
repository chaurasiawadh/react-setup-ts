import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootState, createRootReducer, rootSaga } from '../../src/store';

export default function configureStore(initialState: RootState): Store<RootState> {
  // create the composing function for our middlewares
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose
      : (null || compose);
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store: any = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}
