import { configureStore } from '@reduxjs/toolkit';
import InvoicesReducer from './slices/invoicesSlice';
import FiltersReducer from './slices/filtersSlice';
import oneInvoiceReducer from './slices/oneInvoiceSlice';
import deletedIdReducer from './slices/deletedIdSlice';
import newInvoicesReducer from './slices/newInvoicesSlice';

const store = configureStore({
  reducer: {
    invoices: InvoicesReducer,
    filters: FiltersReducer,
    invoice: oneInvoiceReducer,
    deletedId: deletedIdReducer,
    newInvoices: newInvoicesReducer,
  },
});
export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
