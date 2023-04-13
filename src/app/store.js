import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../app/features/cake/cakeSlice'
import icecreamReducer from './features/icecream/icecreamSlice'
import userReducer from '../app/features/user/userSlice'
// const reduxLogger = require('redux-logger')


// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;