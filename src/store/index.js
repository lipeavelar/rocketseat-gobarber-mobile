import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducers from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
