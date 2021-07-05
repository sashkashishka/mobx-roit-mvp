import * as React from 'react';

import { StoreContext } from './context';

type tInjectArgs = [Store: any, name: string, deps?: string[]] | string;

export const inject = (...args: tInjectArgs[]) => (component: React.FC) => {
  class Inject extends React.Component {
    static contextType = StoreContext;

    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
      this.storesCancellation = args
        .filter((arg) => Array.isArray(arg))
        .map(([Store, name, deps]) => this.context.register(Store, name, deps));

      const stores = args.reduce((acc, curr) => {
        let name = '';

        if (Array.isArray(curr)) {
          name = curr[1];
        }

        if (typeof curr === 'string') {
          name = curr;
        }


        acc[name] = this.context.get(name);
        return acc;
      }, {});

      this.setState(stores);
    }

    componentWillUnmount() {
      this.storesCancellation.map(fn => fn());
    }

    render() {
      return React.createElement(component, { ...this.props, ...this.state });
    }
  }

  return Inject;
}

