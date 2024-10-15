import {
  createSlice,
  PayloadAction,
  //  , createAsyncThunk
} from '@reduxjs/toolkit';
//import { setError } from './errorSlice';
//import { getInvoices } from '../../actions/getInvoices';
import { IInvoice } from '../../../components/Types';

/*export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const invoices = await getInvoices();
      return invoices;
    } catch (error) {
      dispatch(setError('Failed to fetch invoices'));
      return rejectWithValue((error as Error).message);
    }
  }
);*/
import defaultInvoices from '../../../data.json';
type InvoicesState = {
  invoices: IInvoice[];

  editedinvoices: IInvoice[];
  // status: 'idle' | 'loading' | 'succeeded' | 'failed';
  //error: string | null;
};

const initialState: InvoicesState = {
  invoices: defaultInvoices,

  editedinvoices: [],
  // status: 'idle',
  // error: null,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setEditedInvoice: (state, action: PayloadAction<IInvoice[]>) => {
      const { payload } = action;
      console.log(payload);

      state.editedinvoices = payload;
    },
  },

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
      });
  },*/
});

export const { setEditedInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;

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
