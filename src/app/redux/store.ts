import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from './slices/invoicesSlice';
//import FiltersReducer from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    invoices: InvoicesReducer,
    // filters: FiltersReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
