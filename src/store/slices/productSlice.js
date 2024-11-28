import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsService } from '../../services/products.service';

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await ProductsService.getById(id);
    return response;
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  'product/fetchRelatedProducts',
  async (category) => {
    const response = await ProductsService.getByCategory(category);
    return response;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    currentProduct: null,
    relatedProducts: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts = action.payload;
      });
  }
});

export default productSlice.reducer;
