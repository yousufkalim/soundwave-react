import React, { ReactElement } from 'react';
import CustomDesigner from '../pages/CustomDesigner/index';
import CheckoutPage from '../pages/CheckoutPage/index';

// Types
interface BaseRoute {
  path: string;
  protected?: boolean;
  failureRedirect?: string;
  children?: Route[];
}

interface Element extends BaseRoute {
  element: ReactElement;
  navigate?: never;
}

interface Navigate extends BaseRoute {
  navigate: string;
  element?: never;
}

type Route = Element | Navigate;

// Routes
const routes: Route[] = [
  {
    path: '/',
    element: <CustomDesigner />,
  },
  {
    path: '/cart',
    element: <CheckoutPage />,
  },
  {
    path: '*',
    navigate: '/',
  },
];

export default routes;
