import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './UsersSlice';
import {applyMiddleware} from "@reduxjs/toolkit";


export const store = configureStore({

    reducer: {
        usersReducer
    }
})