import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { setError } from './errorSlice';
import { IInvoice, IInvoiceDraft } from '../../../components/Types';

import defaultInvoices from '../../../data.json';
//import { setNewInvoices } from './newInvoicesSlice';
type InvoicesState = {
  invoices: IInvoice[];
  editedinvoices: IInvoice[] | IInvoiceDraft[];
  filters: string[] | null;
  // filteredinvoices: IInvoice[] | IInvoiceDraft[];
};

const initialState: InvoicesState = {
  invoices: defaultInvoices,
  editedinvoices: defaultInvoices,
  filters: ['paid', 'pending', 'draft'],
  //filteredinvoices: defaultInvoices,
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
      state.editedinvoices = state.editedinvoices.filter(
        (invoice) => invoice.id !== payload
      );
    },
    setNewInvoices: (
      state,
      action: PayloadAction<IInvoice | IInvoiceDraft>
    ) => {
      const { payload } = action;
      console.log('setNewInvoices payload', payload);
      state.editedinvoices = [...state.editedinvoices, payload];
    },

    /* setFilters: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      if (!state.filters) {
        state.filters = [payload];
      } else if (state.filters.includes(payload)) {
        state.filters = state.filters.filter((filter) => filter !== payload);
      } else {
        state.filters = [...state.filters, payload];
      }
      if (state.filters !== null && state.filters.length > 0) {
        state.filteredinvoices = state.editedinvoices.filter(
          (invoice: IInvoice | IInvoiceDraft) =>
            state.filters!.includes(invoice.status)
        );
      } else {
        state.filteredinvoices = [];
      }
      console.log('editedinvoices', state.editedinvoices);
      console.log('filteredinvoices', state.filteredinvoices);
    },*/
    setFilters: (state, action: PayloadAction<string>) => {
      const { payload } = action;

      if (state.filters === null) {
        state.filters = [payload];
        return;
      }
      if (state.filters.includes(payload)) {
        state.filters = state.filters.filter((filter) => filter !== payload);
        return;
      }
      state.filters = [...state.filters, payload];
    },
  },
});

export const { setDeletedInvoices, setNewInvoices, setFilters } =
  invoicesSlice.actions;
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
