import Model from "sequelize/types/lib/model";
import { Roles } from "../interfaces/roles";

// Device Info
export interface DeviceInfoProps {
  id?: number,
  title: string,
  description: string,
  deviceId?: number
}
export interface DeviceInfoInstance extends Model<DeviceInfoProps>, DeviceInfoProps {}


// Device
export interface DeviceProps {
  id?: number,
  name: string,
  price: number,
  rating?: number,
  img: string,
  brandId?: number,
  categoryId?: number
}
export interface DeviceInstance extends Model<DeviceProps>, DeviceProps {}


// User
export interface UserProps {
  id?: number,
  email: string,
  password: string,
  role?: Roles
}
export interface UserInstance extends Model<UserProps>, UserProps {}


// Cart
export interface CartProps {
  id?: number,
  userId?: number
}
export interface CartInstance extends Model<CartProps>, CartProps {}


// Cart Device 
export interface CartDeviceProps {
  id?: number,
  cartId?: number,
  deviceId?: number
}
export interface CartDeviceInstance extends Model<CartDeviceProps>, CartDeviceProps {}


// Category 
export interface CategoryProps {
  id?: number,
  name: string,
}
export interface CategoryInstance extends Model<CategoryProps>, CategoryProps {}


// Brand
export interface BrandProps {
  id?: number,
  name: string,
}
export interface BrandInstance extends Model<BrandProps>, BrandProps {}


// Rating
export interface RatingProps {
  id?: number,
  rate: number,
  userId?: number,
  deviceId?: number
}
export interface RatingInstance extends Model<RatingProps>, RatingProps {}


// CategoryBrand
export interface CategoryBrandProps {
  id?: number,
  categoryId?: number,
  brandId?: number
}
export interface CategoryBrandInstance extends Model<CategoryBrandProps>, CategoryBrandProps {}