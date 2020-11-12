import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(`Listening at http://localhost:${app.get("port")}`);
  console.log(`NODE_ENV is ${app.get("env")}`);
});

export default server;
