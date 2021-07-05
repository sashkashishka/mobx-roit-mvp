import { action, observable, makeObservable } from 'mobx';
import { iRS } from './root';

export interface iCommonStore {
  called: number;
  baz(): void;
}

export class CommonStore {
  private root: iRS;

  constructor(rootStore: iRS) {
    this.root = rootStore;
    makeObservable(this, {
      init: action,
      called: observable,
      baz: action,
    });
  }

  public called = 0;

  init(): void {
    console.log('CommonStore initialized');
    console.log(this.root);
  }

  baz(): void {
    this.called += 1;
    console.log('CommonStore called!')
  }
}

