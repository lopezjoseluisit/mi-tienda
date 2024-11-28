import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import Products from '@pages/Products';
import ProductDetail from '@pages/ProductDetail';
import Cart from '@pages/Cart';
import Checkout from '@pages/Checkout';
import LoginForm from '@components/auth/LoginForm';
import Register from '@pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);