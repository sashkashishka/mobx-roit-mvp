import { action, observable, makeObservable } from 'mobx';
import { iRS } from './root';

export class FooStore {
  private root: iRS;

  constructor(rootStore: iRS) {
    this.root = rootStore;
    makeObservable(this, {
      init: action,
      count: observable,
      inc: action,
    });
  }

  public count = 0;

  init(): void {
    console.log('FooStore initialized');
    console.log(this.root);
  }

  inc(): void {
    this.count += 1;
  }
}
