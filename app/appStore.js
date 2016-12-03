import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import EntryPageStore from './EntryPage/store';
import LoginModalStore from './components/LoginModal/store';

class AppStore {
  @observable currentUser = '';
  @observable isAuthenticated = false;
  @observable isActive = false;
  @observable isVisible = false;
}

const appStore = new AppStore();
const entryPageStore = new EntryPageStore();
const loginModalStore = new LoginModalStore();

const stores = {
  app: appStore,
  entryPage: entryPageStore,
  loginModal: loginModalStore,
}

export default stores;

export {appStore, entryPageStore, loginModalStore};