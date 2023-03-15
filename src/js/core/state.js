const currentState = {};
export const GlobalState = new Proxy(
  currentState,
  {
    get(target, prop) {
      if(prop === 'json'){
        return {...currentState}
      }
      return target[prop] || "";
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
  }
);