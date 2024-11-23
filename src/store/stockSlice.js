import { createSlice } from "@reduxjs/toolkit";
const StockSlice = createSlice({
  name: "stock",
  initialState: { stockSearch: [], myStocks: [] },
  reducers: {
    setStockSearch(state, action) {
      state.stockSearch = action.payload;
    },
    setMyStocks(state, action) {
      state.myStocks = action.payload;
    },
  },
});

export default StockSlice;

export const stockAction = StockSlice.actions;
