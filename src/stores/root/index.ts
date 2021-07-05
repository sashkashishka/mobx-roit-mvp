import { proxyHandlers } from './proxy';

export interface iRS {
  register(Store: any, name: string, deps?: string[]): () => void
  get<T>(name: string): T;
  [key: string]: any;
}

class RootStore {
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

  get(name: string) {
    if (name in this) {
      return this[name];
    }

    throw new Error(`
      There is no store with name "${name}".
      Please register store in RootStore or check for typo.
    `);
  }
}

export const rootStore = new RootStore();
