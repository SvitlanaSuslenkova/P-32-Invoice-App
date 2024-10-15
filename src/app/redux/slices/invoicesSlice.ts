import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { setError } from './errorSlice';
import { IInvoice } from '../../../components/Types';
import defaultInvoices from '../../../data.json';
//import { setNewInvoices } from './newInvoicesSlice';
type InvoicesState = {
  invoices: IInvoice[];
  editedinvoices: IInvoice[];
};

const initialState: InvoicesState = {
  invoices: defaultInvoices,
  editedinvoices: defaultInvoices,
  // status: 'idle',
  // error: null,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setDeletedInvoices: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      console.log('setDeletedInvoices payload', payload);
      state.editedinvoices = state.invoices.filter(
        (invoice) => invoice.id !== payload
      );
    },
    setNewInvoices: (state, action: PayloadAction<IInvoice>) => {
      const { payload } = action;
      console.log('setNewInvoices payload', payload);
      //state.editedinvoices = [...state.invoices, payload];
      state.editedinvoices = [...state.editedinvoices, payload];
    },
  },
});

export const { setDeletedInvoices, setNewInvoices } = invoicesSlice.actions;
export default invoicesSlice.reducer;

/* setEditedInvoice: (state, action: PayloadAction<IInvoice[]>) => {
      const { payload } = action;
      console.log(payload);

      state.editedinvoices = payload;
    },*/
/*
  reducers: {
    setFilteredInvoices: (state, action: PayloadAction<string>) => {
      const { payload } = action; //const payload = action.payload;

      if (state.invoices && Array.isArray(payload)) {
        state.filteredinvoices = state.invoices.filter((invoice) =>
          payload.includes(invoice.status)
        );
      } else if (state.invoices && typeof payload == 'string') {
        state.filteredinvoices = state.invoices.filter(
          (invoice) => invoice.status == payload
        );
      else if (state.invoices && payload == null) {
        state.filteredinvoices = [];
      }
    },
  },
  */

/* extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invoices = action.payload;
        state.editedinvoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch invoices';
      });*/
