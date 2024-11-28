import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsService } from '../../services/products.service';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, sort }) => {
    const response = await ProductsService.getAll({ category, sort });
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filters: {
      category: 'all',
      priceRange: [0, 1000],
      search: ''
    }
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: 'all',
        priceRange: [0, 1000],
        search: ''
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setFilter, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;