import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInvoice } from '@/components/Types';

type NewInvoicesState = {
  newInvoices: IInvoice[] | null;
};

const initialState: NewInvoicesState = {
  newInvoices: [],
};

const newInvoicesSlice = createSlice({
  name: 'newInvoices',
  initialState,
  reducers: {
    setNewInvoices: (state, action: PayloadAction<IInvoice>) => {
      const { payload } = action; //const payload = action.payload;

      if (state.newInvoices === null) {
        state.newInvoices = [payload];
        return;
      }
      state.newInvoices = [...state.newInvoices, payload];
      console.log(state.newInvoices);
    },
  },
});

export const { setNewInvoices } = newInvoicesSlice.actions;
export default newInvoicesSlice.reducer;
