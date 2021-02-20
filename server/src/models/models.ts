import { db } from '../db';
import { DataTypes, } from 'sequelize'; // описывают типы в данных в таблице
import { BrandInstance, CartDeviceInstance, CartInstance, CategoryBrandInstance, CategoryInstance, DeviceInfoInstance, DeviceInstance, RatingInstance, UserInstance } from './modelInterfaces';

export const User = db.define<UserInstance>('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'User'}
});

export const Cart = db.define<CartInstance>('cart', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
});

export const CartDevice = db.define<CartDeviceInstance>('cart_device', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
});

export const Device = db.define<DeviceInstance>('device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, unique: true, allowNull: false}
});

export const Category = db.define<CategoryInstance>('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

export const Brand = db.define<BrandInstance>('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

export const Rating = db.define<RatingInstance>('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
});

export const DeviceInfo = db.define<DeviceInfoInstance>('device_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false}
});

// Связующая таблица
export const CategoryBrand = db.define<CategoryBrandInstance>('category_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

User.hasOne(Cart); 
Cart.belongsTo(User); 

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartDevice);
CartDevice.belongsTo(Cart);

Category.hasMany(Device);
Device.belongsTo(Category);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

// Создаем промежуточную таблицу связи многих ко многим
Category.belongsToMany(Brand, {through: CategoryBrand});
Brand.belongsToMany(Category, {through: CategoryBrand});