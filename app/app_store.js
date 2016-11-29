import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

class AppStore {
  @observable currentUser;
  @observable isAuthenticating;
  @observable isAuthenticated;


  constructor() {
    this.isAuthenticating = false;
    this.isAuthenticated = false;
  }





}

export default AppStore;