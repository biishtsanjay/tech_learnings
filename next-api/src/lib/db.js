const { username, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.c3wukmr.mongodb.net/productDB?retryWrites=true&w=majority";
