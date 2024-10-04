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
      const { payload } = action; //const payload = action.payload;

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
/*
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
*/
