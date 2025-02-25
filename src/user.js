import { div } from "../framework/element";
import { onClick } from "../framework/event";
import { createComponent } from "../framework/index";

const methods = {
  changeName: (state, firstName) => ({...state, firstName})
};

const initialState = { firstName: "Harry ", lastName: "Potter"};

const template = ({firstName, lastName, methods}) =>
  div`${onClick(() =>
    methods.changeName("Darvin")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({template, methods, initialState});

