import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import likeSlice from "./likeSlice";
// Part2: Combine Reducers and Create a Store

 export const store = configureStore({
  reducer:{
      like: likeSlice.reducer,

  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
// persistStore(store);
//  export store to global
//  export default store;