import { init } from "./framework";
import { User } from "./src/user";

const firstName = "";
const lastName = "";

//instead of declaring variables here
//you can instead use: init("#app", User({}));
init("#app", User({ firstName, lastName }));

