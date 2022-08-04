import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from './auth';

const reducer = combineReducers({
    auth: authReducer
});

// const middleware = process.env.NODE_ENV !== 'production' ? [thunk] : [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;