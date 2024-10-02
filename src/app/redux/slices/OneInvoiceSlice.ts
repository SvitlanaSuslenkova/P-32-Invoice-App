import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from './errorSlice';
import { getInvoices } from '../../actions/getInvoices';
import { IInvoice } from '../../../components/Types';

export const fetchInvoice = createAsyncThunk(
  'invoice/fetchInvoice',
  async (invoiceId: string, { dispatch, rejectWithValue }) => {
    try {
      const invoices = await getInvoices();
      return invoices.filter((invoice: IInvoice) => invoiceId == invoice.id);
    } catch (error) {
      dispatch(setError('Failed to fetch invoice'));
      return rejectWithValue(error.message);
    }
  }
);

const OneInvoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoice: {} as IInvoice,

    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null,
  },
  reducers: {
    setEditedInvoice: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInvoice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invoice = action.payload;
        state.editedinvoice = action.payload;
      })
      .addCase(fetchInvoice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch invoice';
      });
  },
});

export const { setEditedInvoice } = OneInvoiceSlice.actions;
export default OneInvoiceSlice.reducer;
