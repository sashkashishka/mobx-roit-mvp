import { action, observable, makeObservable } from 'mobx';
import { iCommonStore } from './common';

export class BarStore {
  private common: iCommonStore;

  constructor({ common }: { common: iCommonStore }) {
    this.common = common;
    makeObservable(this, {
      count: observable,
      dec: action,
    });
  }

  public count = 10;

  dec(): void {
    this.count -= 1;
    this.common.baz();
  }
}
