import { action, observable, makeObservable } from 'mobx';

export class BarStore {
  constructor() {
    makeObservable(this, {
      count: observable,
      dec: action,
    });
  }

  public count = 10;

  dec(): void {
    this.count -= 1;
  }
}
