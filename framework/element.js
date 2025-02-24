const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Bagley";

div`Hello ${firstName} ${lastName}!`;

