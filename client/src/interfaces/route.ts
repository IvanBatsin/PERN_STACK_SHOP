export enum RoutePaths {
  ADMIN = '/admin',
  SIGNUP = '/signup',
  SIGNIN = '/signin',
  SHOP = '/shop',
  CART = '/cart',
  DEVICE = '/device',
  DEVICE_ITEM = '/device/:id'
}

export interface Route {
  path: RoutePaths,
  component: React.FunctionComponent
}
