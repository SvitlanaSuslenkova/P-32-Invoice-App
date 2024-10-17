import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInvoice, IInvoiceDraft } from '../../../components/Types';
import defaultInvoices from '../../../data.json';

type InvoicesState = {
  invoices: IInvoice[];
  editedinvoices: IInvoice[] | IInvoiceDraft[];
  filters: string[] | null;
};

const initialState: InvoicesState = {
  invoices: defaultInvoices,
  editedinvoices: defaultInvoices,
  filters: ['paid', 'pending', 'draft'],
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setDeletedInvoices: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.editedinvoices = state.editedinvoices.filter(
        (invoice) => invoice.id !== payload
      );
    },
    setNewInvoices: (
      state,
      action: PayloadAction<IInvoice | IInvoiceDraft>
    ) => {
      const { payload } = action;
      state.editedinvoices = [...state.editedinvoices, payload];
    },

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
