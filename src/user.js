import { div } from "../framework/element";
import { onClick } from "../framework/event";
import { createComponent } from "../framework/index";

const methods = {
  changeName1: (state, firstName) => ({...state, firstName}),
  changeName2: (state, lastName) => ({...state, lastName}),
};

const initialState = { firstName: "click ", lastName: "me"};

const template = ({firstName, lastName, methods}) =>
  div`${onClick(() =>{
    methods.changeName1("thank");
    methods.changeName2("you!!!");
})} Hey, ${firstName} ${lastName}`;

export const User = createComponent({template, methods, initialState});

