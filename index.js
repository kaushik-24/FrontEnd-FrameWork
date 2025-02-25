import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Harry";
const lastName = "Potter";

init("#app", User({ firstName, lastName }));

