import * as React from 'react';

import { StoreContext } from './context';

export const inject = (...args: [Store: any, name: string, deps?: string[]][]) => (component: React.FC) => {

  class Inject extends React.Component {
    static contextType = StoreContext;

    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
      this.storesCancellation = args.map(([Store, name, deps]) => this.context.register(Store, name, deps));

      const stores = args.reduce((acc, [Store, name]) => {
        acc[name] = this.context[name];
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

