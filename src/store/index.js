import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import LoadingSlice from "./loadingData";
import StockSlice from "./stockSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    stock: StockSlice.reducer,
    loading: LoadingSlice.reducer,
  },
});
export default store;
