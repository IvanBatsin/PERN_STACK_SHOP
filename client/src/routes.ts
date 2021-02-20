import { Route, RoutePaths } from './interfaces/route';
import { Admin } from './page/Admin';
import { Auth } from './page/Auth';
import { Cart } from './page/Cart';
import { DevicePage } from './page/DevicePage';
import { Shop } from './page/Shop';

export const authRoutes: Route[] = [
  {
    path: RoutePaths.ADMIN,
    component: Admin
  },
  {
    path: RoutePaths.CART,
    component: Cart
  }
];

export const publicRoutes: Route[] = [
  {
    path: RoutePaths.SHOP,
    component: Shop
  },
  {
    path: RoutePaths.SIGNIN,
    component: Auth
  },
  {
    path: RoutePaths.SIGNUP,
    component: Auth
  },
  {
    path: RoutePaths.DEVICE,
    component: DevicePage
  },
  {
    path: RoutePaths.DEVICE_ITEM,
    component: DevicePage
  }
];