import { makeAutoObservable, action, computed } from 'mobx';
import { IBrandCategory, IDevice } from '../interfaces/shop_items';

export class DeviceStore {
  categories: IBrandCategory[];
  brands: IBrandCategory[];
  devices: IDevice[];
  selectedCategory: IBrandCategory | undefined;
  selectedBrand: IBrandCategory | undefined;
  page: number;
  pageCount: number;
  devicesLimit: number;

  constructor(){
    this.categories = [];
    this.brands = [];
    this.devices = [];

    this.page = 1;
    this.pageCount = 0;
    this.devicesLimit = 3;

    this.selectedCategory = undefined;
    this.selectedBrand = undefined;

    makeAutoObservable(this);
  }

  @action setCategories(categories: IBrandCategory[]): void {
    this.categories = categories;
  }
  @action setBrands(brands: IBrandCategory[]): void {
    this.brands = brands;
  }
  @action setDevices(state: IDevice[]): void {
    this.devices = state;
  }
  @action setSelectedCategory(category: IBrandCategory): void {
    this.selectedCategory = category;
  }
  @action setSelectedBrand(brand: IBrandCategory): void {
    this.selectedBrand = brand;
  }
  @action setPage(page: number): void {
    this.page = page;
  }
  @action setPageCount(count: number): void {
    this.pageCount = count;
  }
  @action setDevicesLimit(limit: number): void {
    this.devicesLimit = limit;;
  }

  @computed get getCategories(): IBrandCategory[] {
    return this.categories;
  }
  @computed get getBrands(): IBrandCategory[] {
    return this.brands;
  }
  @computed get getdevices(): IDevice[] {
    return this.devices;
  }
  @computed get getSelectedCategory(): IBrandCategory | undefined {
    return this.selectedCategory;
  }
  @computed get getSelectedBrand(): IBrandCategory | undefined {
    return this.selectedBrand;
  }
  @computed get getPage(): number {
    return this.page;
  }
  @computed get getPageCount(): number {
    return this.pageCount;
  }
  @computed get getDevicesLimit(): number {
    return this.devicesLimit;
  }
}