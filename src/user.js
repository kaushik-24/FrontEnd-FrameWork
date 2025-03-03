import { div } from "../framework/element";
import { onClick } from "../framework/event";
import { createComponent } from "../framework/index";

const methods = {
  changeName1: (state, initialName) => ({...state, initialName}),
  changeName2: (state, finalName) => ({...state, finalName}),
};

const initialState = { initialName: "click ", finalName: "me"};

const template = ({initialName, finalName, methods}) =>
  div`${onClick(() =>{
    methods.changeName1("thank");
    methods.changeName2("you!!!");
})} Hey, ${initialName} ${finalName}`;

export const User = createComponent({template, methods, initialState});

