import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { devToolsEnhancer } from 'redux-devtools-extension'

import rootReducers from './root-reducer'
// import mySaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    devToolsEnhancer(applyMiddleware(sagaMiddleware))
)

// sagaMiddleware.run(mySaga)

export default store