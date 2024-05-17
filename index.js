const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
const Newrouter = require("./routers/NewsRoutes");

const middlewareFunction = require("./middleware/errors");

app.use("/api", Newrouter);

app.use(middlewareFunction);

app.listen(3000, () => {
  console.log(`http://localhost:${port}/`);
});
