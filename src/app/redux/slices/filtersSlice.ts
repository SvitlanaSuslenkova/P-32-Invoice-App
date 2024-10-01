import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: ['paid', 'pending', 'draft'] as string | string[] | null,
  },
  reducers: {
    setFilters: (state, action) => {
      if (
        Array.isArray(state.filters) &&
        state.filters.includes(action.payload)
      ) {
        state.filters = state.filters.filter(
          (filter) => filter !== action.payload
        );
      } else if (
        typeof state.filters == 'string' &&
        state.filters == action.payload
      ) {
        state.filters = [];
      } else if (
        typeof state.filters == 'string' &&
        state.filters !== action.payload
      ) {
        state.filters = [state.filters, action.payload];
      } else if (
        Array.isArray(state.filters) &&
        !state.filters.includes(action.payload)
      ) {
        state.filters = [...state.filters, action.payload];
      } else state.filters = action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
