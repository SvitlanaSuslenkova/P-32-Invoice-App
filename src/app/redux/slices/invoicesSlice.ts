import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from './errorSlice';
import { getInvoices } from '../../actions/getInvoices';
import { IInvoice } from '../../../components/Types';

export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const invoices = await getInvoices();
      return invoices;
    } catch (error) {
      dispatch(setError('Failed to fetch invoices'));
      return rejectWithValue(error.message);
    }
  }
);
const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: [] as IInvoice[],
    filteredinvoices: [] as IInvoice[],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  },
  reducers: {
    setFilteredInvoices: (state, action) => {
      if (state.invoices && Array.isArray(action.payload)) {
        state.filteredinvoices = state.invoices.filter((invoice) =>
          action.payload.includes(invoice.status)
        );
      } else if (state.invoices && typeof action.payload == 'string') {
        state.filteredinvoices = state.invoices.filter(
          (invoice) => invoice.status == action.payload
        );
      } else if (state.invoices || action.payload == null) {
        state.filteredinvoices = [];
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invoices = action.payload as IInvoice[];
        state.filteredinvoices = action.payload as IInvoice[];
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch invoices';
      });
  },
});

export const { setFilteredInvoices } = invoicesSlice.actions;
export default invoicesSlice.reducer;
