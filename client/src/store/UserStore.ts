import { makeAutoObservable, action, computed } from 'mobx';
import { User } from '../interfaces/user';

export class UserStore {
  isAuth: boolean;
  user: User | undefined;
  constructor(){
    this.isAuth = false;
    this.user = undefined;
    makeAutoObservable(this);
  }

  @action setIsAuth(state: boolean): void {
    this.isAuth = state;
  }

  @action setUser(state: User | undefined): void {
    this.user = state;
  }

  @computed get getIsAuth(): boolean{
    return this.isAuth;
  }

  @computed get getUser(): any {
    return this.user;
  }
}