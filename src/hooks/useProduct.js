import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, fetchRelatedProducts } from '../store/slices/productSlice';

export const useProduct = (id) => {
  const dispatch = useDispatch();
  const { currentProduct, relatedProducts, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentProduct?.category) {
      dispatch(fetchRelatedProducts(currentProduct.category));
    }
  }, [dispatch, currentProduct]);

  return {
    product: currentProduct,
    relatedProducts: relatedProducts.filter(p => p.id !== currentProduct?.id).slice(0, 4),
    loading,
    error
  };
};
