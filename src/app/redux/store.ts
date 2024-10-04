import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from './slices/invoicesSlice';
import FiltersReducer from './slices/filtersSlice';
import InvoiceReducer from './slices/oneInvoiceSlice';
import deletedIdReducer from './slices/deletedIdSlice';

const store = configureStore({
  reducer: {
    invoices: InvoicesReducer,
    filters: FiltersReducer,
    invoice: InvoiceReducer,
    deletedId: deletedIdReducer,
  },
});
export default store;
