import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeletedIdState = {
  deletedId: string[] | null;
};

const initialState: DeletedIdState = {
  deletedId: [],
};

const deletedIdSlice = createSlice({
  name: 'deletedId',
  initialState,
  reducers: {
    setDeletedId: (state, action: PayloadAction<string>) => {
      const { payload } = action;

      if (state.deletedId === null) {
        state.deletedId = [payload];
        return;
      }
      state.deletedId = [...state.deletedId, payload];
      console.log(state.deletedId);
    },
  },
});

export const { setDeletedId } = deletedIdSlice.actions;
export default deletedIdSlice.reducer;
