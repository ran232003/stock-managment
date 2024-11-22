import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import LoadingSlice from "./loadingData";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    loading: LoadingSlice.reducer,
  },
});
export default store;
