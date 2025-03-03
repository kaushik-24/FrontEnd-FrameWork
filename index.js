import { init } from "./framework";
import { User } from "./src/user";

const initialName = "";
const finalName = "";

//instead of declaring variables here
//you can instead use: init("#app", User({}));
init("#app", User({ initialName, finalName }));

