import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './features/rootReducer'
import rootSaga from './middleware';

//create middleware
const sagaMiddlewar = createSagaMiddleware();


export const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddlewar]
})

//run middleware
sagaMiddlewar.run(rootSaga)