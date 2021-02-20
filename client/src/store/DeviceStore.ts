import { makeAutoObservable, action, computed } from 'mobx';
import { IBrandCategory, IDevice } from '../interfaces/shop_items';

export class DeviceStore {
  categories: IBrandCategory[];
  brands: IBrandCategory[];
  devices: IDevice[];
  selectedCategory: IBrandCategory | undefined;
  selectedBrand: IBrandCategory | undefined;
  constructor(){
    this.categories = [
      {id: 1, name: 'fridge'},
      {id: 2, name: 'smartphone'},
      {id: 3, name: 'notebook'},
      {id: 4, name: 'kitchen'},
    ];

    this.brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'}
    ];

    this.devices = [
      {id: 1, name: 'Iphone 12', rating: 5, price: 25000, img: 'https://33.img.avito.st/640x480/8025258733.jpg'},
      {id: 2, name: 'Samsung A 20', rating: 5, price: 25000, img: 'https://33.img.avito.st/640x480/8025258733.jpg'},
      {id: 3, name: 'Huawei P40', rating: 5, price: 25000, img: 'https://33.img.avito.st/640x480/8025258733.jpg'},
      {id: 4, name: 'Meizu 12a', rating: 5, price: 25000, img: 'https://33.img.avito.st/640x480/8025258733.jpg'},
    ];

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
}