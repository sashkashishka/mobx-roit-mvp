import { proxyHandlers } from './proxy';

export interface iRS {
  register(Store: any, name: string, deps?: string[]): () => void
  [key: string]: any;
}

class RS {
  register(Store: any, name: string, deps: string[] = []) {
    const root = this;

    const depsObj = deps
      .map((d) => {
        if (!Object.prototype.hasOwnProperty.call(root, d)) {
          throw new Error(`Store "${d}" doesn't exists in RootStore`);
        }

        return d;
      })
      .reduce((acc, curr) => {
        acc[curr] = root[curr];

        return acc;
      }, {});

    this[name] = new Store(depsObj);

    return () => {
      delete this[name];
    };
  }
}

export const rootStore = new Proxy<iRS>(new RS(), proxyHandlers);
