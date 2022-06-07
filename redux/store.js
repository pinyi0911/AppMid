import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";

export const store = configureStore({
    reducer:{
        like: likeSlice.reducer,
        // cart: cartSlice.reducer,
        // content: persistReducer(persistConfig, contentReducer)
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
// persistStore(store);

export default store;