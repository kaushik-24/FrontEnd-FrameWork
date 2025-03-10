import { h } from "snabbdom";

const initialState = {
  template: "",
  on: {}  //This initial state property will help us manage event handlers
};

const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];
  
  /**
   * we define behavior of an event node &
   * this is where type is important;
  */
  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: {click: currentArg.click} };
  }
  return {
    ...acc,
    template: acc.template + currentString + (args[index] || "")
  };
};

const createElement = tagName => (strings, ...args) => {
  const { template, on } = strings.reduce(createReducer(args), initialState);

  return {
  type: "element",
  template: h (tagName, { on }, template) //2nd argument concerns attributes, properties and events
  };
};

export const div = createElement("div");
export const p = createElement("p");

