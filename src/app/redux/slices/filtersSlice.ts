import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  filters: string[] | null;
};

const initialState: FiltersState = {
  filters: ['paid', 'pending', 'draft'],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
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

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
