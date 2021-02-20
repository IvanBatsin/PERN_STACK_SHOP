import { makeAutoObservable, action, computed } from 'mobx';

export class UserStore {
  isAuth: boolean;
  user: any;
  constructor(){
    this.isAuth = false;
    this.user = {};
    makeAutoObservable(this);
  }

  @action setIsAuth(state: boolean): void {
    this.isAuth = state;
  }

  @action setUser(state: any): void {
    this.user = state;
  }

  @computed get getIsAuth(): boolean{
    return this.isAuth;
  }

  @computed get getUser(): any {
    return this.user;
  }
}