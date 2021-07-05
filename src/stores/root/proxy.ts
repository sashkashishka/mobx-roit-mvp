export const proxyHandlers = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }

    console.log(target)
    console.log(prop)
    console.log(target[prop])

    // console.error(`There is no ${prop} store in RootStore`);
  },
};
