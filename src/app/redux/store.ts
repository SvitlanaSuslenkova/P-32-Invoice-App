import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from './slices/invoicesSlice';
import FiltersReducer from './slices/filtersSlice';
import InvoiceReducer from './slices/oneInvoiceSlice';

const store = configureStore({
  reducer: {
    invoices: InvoicesReducer,
    filters: FiltersReducer,
    invoice: InvoiceReducer,
  },
});
export default store;
